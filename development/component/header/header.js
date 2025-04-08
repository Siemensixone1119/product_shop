import template from "../header/header.html";
export function initHeader() {
    const headerElement = document.getElementById("header");
    if (!headerElement) return;
    headerElement.innerHTML = template;
};