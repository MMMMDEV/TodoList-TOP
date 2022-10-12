import { main } from "./first-load";

import ArrawIcon from "./images/angle-left.svg";
import AddIcon from "./images/plus.svg"

export function mainHeaderFunction() {
    // create obj
    const headerMain = document.createElement("div");
    const hideSideHeader = document.createElement("div");
    const hideIcon = document.createElement("img");
    hideIcon.src = ArrawIcon;
    const currentSection  = document.createElement("div");
    const sectionText = document.createElement("p");
    sectionText.textContent = "Today";
    const addNewItem = document.createElement("div");
    const addIcon = document.createElement("img");
    addIcon.src = AddIcon;

    // add classes
    headerMain.classList.add("header-main");
    hideSideHeader.classList.add("hide-side-header");
    hideIcon.classList.add("icon");
    currentSection.classList.add("current-section");
    sectionText.classList.add("text");
    addNewItem.classList.add("add-new-item");
    addIcon.classList.add("icon");

    // append
    main.insertAdjacentElement("beforeend", headerMain);
    headerMain.insertAdjacentElement("beforeend", hideSideHeader);
    headerMain.insertAdjacentElement("beforeend", currentSection);
    headerMain.insertAdjacentElement("beforeend", addNewItem);
    hideSideHeader.insertAdjacentElement("beforeend", hideIcon);
    currentSection.insertAdjacentElement("beforeend", sectionText);
    addNewItem.insertAdjacentElement("beforeend", addIcon);

}