import template from "../hero/hero.html";
export default function initHero() {
    const heroElement = document.getElementById("hero");
    if (!heroElement) return;
    heroElement.innerHTML = template;
};