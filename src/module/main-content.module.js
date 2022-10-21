import { main } from "./first-load";

import smileFace from "../images/smile-beam.svg";

const sectionTypeText = document.createElement("p");
const mainContent = document.createElement("div");
const DoneDiv = document.createElement("div");

export function mainContentFunction() {
    // creating obj

    const doneText = document.createElement("p");
    const faceIcon = document.createElement("img");
    doneText.textContent = "All Done For";
    sectionTypeText.textContent = "Today!";
    faceIcon.src = smileFace;

    // add classes
    mainContent.classList.add("main-content");

    DoneDiv.classList.add("done-div");
    doneText.classList.add("text");
    sectionTypeText.classList.add("text");
    faceIcon.classList.add("icon");

    // append
    main.insertAdjacentElement("beforeend", mainContent);
    mainContent.insertAdjacentElement("beforeend", DoneDiv);
    DoneDiv.insertAdjacentElement("beforeend", doneText);
    DoneDiv.insertAdjacentElement("beforeend", sectionTypeText);
    DoneDiv.insertAdjacentElement("beforeend", faceIcon);

}

export {sectionTypeText, mainContent, DoneDiv};