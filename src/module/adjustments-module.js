import { sideHeader } from "./first-load";

import sourcesIconWorld from "../images/world.svg";
import settingsIconGear from "../images/settings.svg";

export function adjustmentsFunction() {
    // create obj
    const adjustments = document.createElement("div");

    const sources = document.createElement("div");
    const sourcesIcon = document.createElement("img");
    const sourcesText = document.createElement("p");
    sourcesIcon.src = sourcesIconWorld;
    sourcesText.textContent = "Sources";

    const settings = document.createElement("div");
    const settingsIcon = document.createElement("img");
    const settingsText = document.createElement("p");
    settingsIcon.src = settingsIconGear;
    settingsText.textContent = "Settings";

    // add classes
    adjustments.classList.add("adjustments");

    sources.classList.add("sources");
    sourcesIcon.classList.add("icon");
    sourcesText.classList.add("text");

    settings.classList.add("settings");
    settingsIcon.classList.add("icon");
    settingsText.classList.add("text");

    // append
    sideHeader.insertAdjacentElement("beforeend", adjustments); 
    adjustments.insertAdjacentElement("beforeend", sources);
    adjustments.insertAdjacentElement("beforeend", settings);
    sources.insertAdjacentElement("beforeend", sourcesIcon);
    sources.insertAdjacentElement("beforeend", sourcesText);
    settings.insertAdjacentElement("beforeend", settingsIcon);
    settings.insertAdjacentElement("beforeend", settingsText);

}