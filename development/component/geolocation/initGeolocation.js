import template from "../geolocation/geolocation.html";
export default function initGeolocation() {
    const geolocationElement = document.getElementById("geolocation");
    if (!geolocationElement) return;
    geolocationElement.innerHTML = template;
};