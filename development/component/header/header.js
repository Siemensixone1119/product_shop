import template from "../header/header.html";
export default function initHeader() {
    const headerElement = document.getElementById("header");
    if (!headerElement) return;
    headerElement.innerHTML = template;
};