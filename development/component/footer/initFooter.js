import template from "../footer/footer.html";
export default function initFooter() {
    const footerElement = document.getElementById("footer");
    if (!footerElement) return;
    footerElement.innerHTML = template;
};