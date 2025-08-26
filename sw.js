// sw.js - Service Worker for To-Do notifications
self.addEventListener('install', (ev) => {
  self.skipWaiting();
});

self.addEventListener('activate', (ev) => {
  ev.waitUntil(self.clients.claim());
});

// Listen for notification actions
self.addEventListener('notificationclick', (ev) => {
  const action = ev.action;
  const data = ev.notification.data || {};
  const taskId = data.taskId;
  ev.notification.close();

  // Focus any open window or open root
  const promise = clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
    if (windowClients.length > 0) {
      const client = windowClients[0];
      client.focus();
      // Send a message to the client so the page can act (mark done, snooze)
      if (action === 'markdone') {
        client.postMessage({ type: 'markdone', taskId });
      } else if (action === 'snooze') {
        client.postMessage({ type: 'snooze', taskId, minutes: 5 }); // default 5m snooze
      } else {
        // default open
        client.postMessage({ type: 'open', taskId });
      }
      return;
    }
    // If no client open, open a new window
    return clients.openWindow('/').then(newWindow => {
      // small delay and then postMessage (some browsers may not allow immediate messaging)
      // we'll rely on the new window to request data again or check tasks from storage
    });
  });

  ev.waitUntil(promise);
});

// Optional: handle push (backend) - placeholder for server push support
self.addEventListener('push', (ev) => {
  // Example payload (you must implement server side to send push)
  // {
  //   title: 'Reminder: Task',
  //   body: 'Task body',
  //   data: { taskId: 'abc123' },
  //   actions: [{action:'markdone', title:'Mark Done'}, {action:'snooze', title:'Snooze 5m'}]
  // }
  let payload = {};
  try {
    if (ev.data) payload = ev.data.json();
  } catch (e) { payload = { title: 'Reminder', body: ev.data ? ev.data.text() : 'You have a notification' }; }

  const title = payload.title || 'Reminder';
  const options = {
    body: payload.body || '',
    data: payload.data || {},
    actions: payload.actions || [{action:'markdone', title:'Mark Done'}, {action:'snooze', title:'Snooze 5m'}],
    renotify: true,
    tag: payload.tag || `push-${Date.now()}`
  };

  ev.waitUntil(self.registration.showNotification(title, options));
});

// you may add fetch/event handlers for offline app shell here
