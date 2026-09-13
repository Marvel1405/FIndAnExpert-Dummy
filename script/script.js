// function theme() {
//   document.body.classList.toggle("dark");
// }
// 1. Run this immediately on page load to apply the saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

// 2. Your updated toggle function
function theme() {
  document.body.classList.toggle("dark");

  // 3. Save the new preference to localStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}
