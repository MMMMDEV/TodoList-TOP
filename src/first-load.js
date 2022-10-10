import { todoList } from "./todo-list-module";
import { prioritiesFuction } from "./priorities-module";
import { projectsFunction } from "./projects-module";

const content = document.querySelector("#content");
const sideHeader = document.createElement("div");

export function firstLoad() {
    // creating objects

    const adjustments = document.createElement("div");
    
    const main = document.createElement("div");

    // adding classes
    sideHeader.classList.add("side-header");

    adjustments.classList.add("adjustments");

    main.classList.add("main");

    // appending
    content.insertAdjacentElement("beforeend", sideHeader);
    content.insertAdjacentElement("beforeend", main);
    sideHeader.insertAdjacentElement("beforeend", adjustments);    
}

todoList();
prioritiesFuction();
projectsFunction();

export {sideHeader};