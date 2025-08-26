## 📄 README.md

````markdown
# 📝 To-Do List App

A simple yet powerful To-Do List web app with **reminders, notifications, recurring tasks, and import/export support**.  
Built with **HTML, TailwindCSS, and Vanilla JS**.

---

## ✨ Features
- ✅ Add, edit, and delete tasks  
- ⏰ **Reminder system** using browser Notifications API  
- 🔔 Notifications include **Mark Done / Snooze 5m** actions  
- ♻️ **Recurring tasks** (Daily / Weekly / Monthly)  
- 📤 Export tasks as JSON  
- 📥 Import tasks from JSON  
- 🎵 Optional reminder sound  
- ⚙️ Settings modal for reminders, sound toggle, reminder window  
- 💾 Persistent storage via `localStorage`  
- 🛠 Service Worker for better notification handling  

---

## 🚀 Live Demo
👉 [Click here to use the app](https://nitesh-shaw-098.github.io/To-Do-List/)  



---

## 🛠 Installation (Run Locally)
1. Clone the repo:
   ```bash
   git clone https://github.com/nitesh-shaw-098/To-Do-List.git
````

2. Open the folder:

   ```bash
   cd todo-app
   ```
3. Run a local server (important for service worker):

   ```bash
   # If Python is installed
   python -m http.server
   ```

   Then open [http://localhost:8000](http://localhost:8000) in your browser.

Or use **VS Code → Live Server extension**.

---

## 📂 Project Structure

```
todo-app/
├── index.html    # Main App
├── sw.js         # Service Worker (for notifications)
└── README.md     # Project info
```

---

## ⚠️ Notes & Limitations

* Notifications work when the app is open in browser (foreground or background tab).
* To support **push notifications even when the browser is closed**, a backend push server is required (e.g. Firebase).
* Works best in **Chrome / Edge / Firefox (latest versions)**.

---

## 📸 Screenshot

![App Screenshot](screenshot.png)
*(Replace with your own screenshot)*

---

## 👨‍💻 Author

* Made with ❤️ by [Your Name](https://github.com/nitesh-shaw-098)

```



Chaahta hai mai tere liye ek **cool screenshot banner** design karne ka code bhi bana du jo tu repo me daal sake?
```
