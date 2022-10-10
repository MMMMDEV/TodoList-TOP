import { sideHeader } from "./first-load";

import prioritiesArrawIcon from "./images/angle-left.svg";
import addProjectIcon from "./images/plus.svg"

export function projectsFunction() {
    // create obj
    const projects = document.createElement("div");
    const project = document.createElement("div");
    const projectIcon = document.createElement("img");
    const projectText = document.createElement("p");
    projectText.textContent = "Projects";
    projectIcon.src = prioritiesArrawIcon;
    const projectsContent = document.createElement("div");
    const addProject = document.createElement("div");
    const addIcon = document.createElement("img");
    const addText = document.createElement("p");

    // add class 
    projects.classList.add("projects");
    project.classList.add("project");
    projectIcon.classList.add("icon");
    projectIcon.classList.add("Arrow-icon");
    projectText.classList.add("text");
    projectsContent.classList.add("projects-content");
    addProject.classList.add("add-project");
    addIcon.classList.add("icon");
    addText.classList.add("text");
    addText.textContent = "Add";
    addIcon.src = addProjectIcon;

    // append
    sideHeader.insertAdjacentElement("beforeend", projects);
    projects.insertAdjacentElement("beforeend", project);
    projects.insertAdjacentElement("beforeend", projectsContent);
    projects.insertAdjacentElement("beforeend", addProject);
    project.insertAdjacentElement("beforeend", projectIcon);
    project.insertAdjacentElement("beforeend", projectText);
    addProject.insertAdjacentElement("beforeend", addIcon);
    addProject.insertAdjacentElement("beforeend", addText);
};