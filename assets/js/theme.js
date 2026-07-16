document.addEventListener("DOMContentLoaded", () => {

const body = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
body.setAttribute("data-theme", savedTheme);
}

});