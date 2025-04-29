import template from "../special/special.html";
export default function initSpecial() {
    const specialElement = document.getElementById("special");
    if (!specialElement) return;
    specialElement.innerHTML = template;
};