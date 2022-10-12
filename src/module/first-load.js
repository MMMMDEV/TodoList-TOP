import { todoList } from "./todo-list-module";
import { prioritiesFuction } from "./priorities-module";
import { projectsFunction } from "./projects-module";
import { adjustmentsFunction } from "./adjustments-module";

import { mainHeaderFunction } from "./main-header-module";
import { mainContentFunction } from "./main-content.module";

const content = document.querySelector("#content");
const sideHeader = document.createElement("div");
const main = document.createElement("div");

export function firstLoad() {
    // adding classes
    sideHeader.classList.add("side-header");
    main.classList.add("main");

    // appending
    content.insertAdjacentElement("beforeend", sideHeader);
    content.insertAdjacentElement("beforeend", main);   
}

todoList();
prioritiesFuction();
projectsFunction();
adjustmentsFunction();
mainHeaderFunction();
mainContentFunction();

export {sideHeader, main};