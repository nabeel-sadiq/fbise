const doc = document.documentElement;
const theme = localStorage.getItem("theme") || "emerald";

doc.setAttribute("data-theme", theme);
console.log(theme)