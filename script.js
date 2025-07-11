"use strict";
import { students } from "./data/students.js";

let selectedId = 1;
const studentCard = document.querySelector(".student-card");
const summary = document.querySelector(".summary");
const tableBody = document.querySelector("#subject-data");
const highlight = document.querySelector(".highlights");

// # Toggle Theme
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") document.body.classList.add("dark");

//////////////////////////////////////////////////////////////////////
// #Student Switcher
const studentTabs = document.getElementById("student-tabs");
// console.log(studentTabs);
studentTabs.innerHTML = students
  .map(
    (student) =>
      `<option value="${student.id}">${student.name.split(" ")[0]}</option>`
  )
  .join(" ");

studentTabs.addEventListener("change", function (e) {
  selectedId = parseInt(e.target.value);
  renderDashBoard(selectedId);
});

//////////////////////////////////////////////////////////////////////
// #Render function
function renderDashBoard(selectedId) {
  const studentId = students.find((s) => s.id === selectedId);
  if (!studentId) return;
  const student = students[selectedId];
  const subjects = students[selectedId].subjects;
  studentCardRender(student);
  summaryRender(subjects);
  subjectDataRender(subjects);
  highlightRender(subjects);
}

renderDashBoard(0);

//////////////////////////////////////////////////////////////////////
// #student Card Renderer
function studentCardRender(student) {
  studentCard.querySelector("#student-avatar").src = student.avatar;
  studentCard.querySelector("#student-avatar").alt = `Profile Picture of ${
    student.name.split(" ")[0]
  }`;
  studentCard.querySelector("#student-name").textContent = student.name;
  studentCard.querySelector("#student-age").textContent = student.age;
  studentCard.querySelector("#student-grade").textContent = student.grade;
}

///////////////////////////////////////////////////////////////////////
// #summary Renderer
function summaryRender(subjects) {
  summary.querySelector("#total-subjects").textContent = subjects.length;
  summary.querySelector("#avg-score").textContent =
    subjects.reduce((acc, curVal) => acc + curVal.marks, 0) / subjects.length;
  summary.querySelector("#passed-count").textContent = subjects.filter(
    (subject) => subject.marks >= 35
  ).length;
}

//////////////////////////////////////////////////////////////////////
// #subject data Render
function subjectDataRender(subjects) {
  tableBody.innerHTML = subjects
    .map(
      (subject) => `<tr>
  <td>${subject.name}</td>
  <td>${subject.marks}</td>
  <td>${grade(subject.marks)}</td>
  <td class="status-${subject.marks >= 35 ? "pass" : "fail"}">${
        subject.marks >= 35 ? "Pass" : "Fail"
      }</td>
</tr>`
    )
    .join("\n");
}

/////////////////////////////////////////////////////////////////////
// #highlights Renderer
function highlightRender(subjects) {
  highlight.querySelector("#top-subject").textContent = subjects.reduce(
    (acc, curr) => {
      if (acc.marks < curr.marks) acc = curr;
      return acc;
    },
    { name: "", marks: -1 }
  ).name;
  highlight.querySelector("#low-subject").textContent = subjects.reduce(
    (acc, curr) => {
      if (acc.marks > curr.marks) acc = curr;
      return acc;
    },
    { name: "", marks: 101 }
  ).name;
}

/////////////////////////////////////////////////////////////////////
// #Utility functions
function grade(marks) {
  if (marks >= 90) return "A+";
  else if (marks >= 80) return "A";
  else if (marks >= 70) return "B";
  else if (marks >= 60) return "C";
  else if (marks >= 50) return "D";
  else if (marks >= 35) return "E";
  else return "F";
}
