# 🎓 Smart Student Dashboard

A fully responsive, accessible student performance dashboard built using **HTML**, **CSS**, and **Vanilla JavaScript**. This project was crafted to master JavaScript fundamentals — especially array methods like `map`, `filter`, `reduce`, and, `find` — while delivering a clean, theme-switchable UI with semantic HTML and modern CSS best practices.

---

## 📌 Overview

This web application dynamically displays performance metrics of multiple students. Users can:

- Switch between different students via dropdown
- View subject-wise marks, grades, and pass/fail status
- See summarized statistics (average, passed subjects)
- Highlight top and lowest scoring subjects
- Toggle between **light** and **dark** mode

All data is rendered and manipulated in real-time using **only JavaScript**, with no frontend frameworks or libraries.

---

## 🔍 Demo

🔗 [Live Site](https://msandromeda.github.io/smart-student-dashboard/)  
💻 [View Source Code](https://github.com/MSAndromeda/smart-student-dashboard)

---

## 🎯 Learning Objectives

This project helped me:

- ✅ Master JavaScript array methods: `map`, `filter`, `reduce`, `find`, `some`, `every`
- ✅ Practice modular JavaScript functions and clean DOM updates
- ✅ Understand DOM querying and event delegation
- ✅ Create dynamic components from scratch
- ✅ Implement a **Dark/Light theme** using CSS Variables
- ✅ Use semantic HTML with accessibility in mind
- ✅ Style layouts with **Flexbox**, variables, and transitions

---

## 🧠 Key Concepts Applied

| Feature             | JS Method Used         | Description                                       |
| ------------------- | ---------------------- | ------------------------------------------------- |
| Student switcher    | `map`, `eventListener` | Dynamically populated select dropdown             |
| Student info card   | `find`                 | Fetch and display student details                 |
| Summary statistics  | `reduce`, `filter`     | Calculate total, average, and pass count          |
| Subject performance | `map`                  | Create table rows dynamically                     |
| Highlights section  | `reduce`               | Identify top/lowest scoring subjects              |
| Theme toggler       | DOM toggle, CSS vars   | Switch light/dark mode using `classList` and vars |

---

## 📁 Folder Structure

```
📦 smart-student-dashboard/
├── index.html
├── style.css
├── script.js
├── /data
│   └── students.js
├── /assets
│   └── student-1.png
│   └── student-2.png
```

---

## 🎨 Design Guide

### Fonts

- **Headings:** `"Poppins", sans-serif`
- **Body:** `"Inter", sans-serif`

### Theme Colors

| Token       | Light Mode | Dark Mode |
| ----------- | ---------- | --------- |
| `--bg`      | `#f9fafb`  | `#121212` |
| `--text`    | `#333333`  | `#f5f5f5` |
| `--primary` | `#81d4f5`  | `#818cf8` |
| `--card`    | `#ffffff`  | `#1e1e1e` |
| `--success` | `#22c55e`  | `#4ade80` |
| `--danger`  | `#ef4444`  | `#f87171` |
| `--border`  | `#d1d5db`  | `#464647` |

### Shadows

- **Light mode shadow:** `rgba(0, 0, 0, 0.514)`
- **Dark mode shadow:** `rgb(226, 215, 215)`

---

## 🌗 Dark Mode

A theme toggle button switches between light and dark modes using `classList.toggle()` on `<body>` and CSS custom properties (`--bg`, `--text`, etc.).

---

## 🧪 Sample Data Format

```js
{
  id: 1,
  name: "Ananya Sharma",
  age: 16,
  grade: "10th",
  avatar: "./assets/student-1.jpg",
  subjects: [
    { name: "Math", marks: 87 },
    { name: "English", marks: 73 },
    { name: "Science", marks: 64 },
    { name: "History", marks: 56 },
    { name: "Computer", marks: 91 },
  ]
}
```

---

## 🚀 How to Run Locally

1. Clone the repo:

   ```bash
   git clone https://github.com/MSAndromeda/smart-student-dashboard.git
   cd smart-student-dashboard
   ```

2. Open `index.html` in your browser — no server setup needed.

---

## 💡 Future Improvements

- ✅ Add transitions on card hover and theme toggle
- 🔜 Add search/filter functionality by subject
- 🔜 Add animated chart using Canvas or Chart.js
- 🔜 Store data in `localStorage` for user-created students

---

## 🙌 Acknowledgements

- Icons from [Lucide Icons](https://lucide.dev/)

---

## 📣 Author

**Manas Anand Singh**  
💼 Aspiring FullStack Developer  
📧 ageoffcontent@gmail.com  
🌐 [LinkedIn](https://www.linkedin.com/in/manas-anand-singh-2414321b8/)

---

## 📄 License

MIT License – feel free to fork, star, or contribute!
