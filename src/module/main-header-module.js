import { main } from "./first-load";

import ArrawIcon from "../images/angle-left.svg";
import AddIcon from "../images/plus.svg"

const sectionText = document.createElement("p");

const addIcon = document.createElement("img");
const hideIcon = document.createElement("img");
const headerMain = document.createElement("div");
const addNewItem = document.createElement("div");

export function mainHeaderFunction() {
    // create obj
    const hideSideHeader = document.createElement("div");
    hideIcon.src = ArrawIcon;
    const currentSection  = document.createElement("div");
    sectionText.textContent = "Today";
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

export {sectionText, addIcon, hideIcon, headerMain, addNewItem};