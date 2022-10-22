import { sideHeader } from "./first-load";

import priorityClockRed from "../images/time-oclock-red.svg";
import priorityClockYellow from "../images/time-oclock-yellow.svg";
import priorityClockBlue from "../images/time-oclock-blue.svg";
import prioritiesArrawIcon from "../images/angle-left.svg";

const priorities = document.createElement("div");
const prioritiesIcon  = document.createElement("img");
const priorityContent = document.createElement("div");
const critical = document.createElement("div");
const major = document.createElement("div");
const moderate = document.createElement("div");

export function prioritiesFuction() {
    // create obj
    const priority = document.createElement("div");

    const prioritiesText = document.createElement("p");
    prioritiesIcon.src = prioritiesArrawIcon;    
    prioritiesText.textContent = "Priorities";

    const criticalIcon = document.createElement("img");
    const majorIcon = document.createElement("img");
    const moderateIcon = document.createElement("img");
    const criticalText = document.createElement("p");
    const majorText = document.createElement("p");
    const moderateText = document.createElement("p");
    criticalText.textContent = "Critical";
    majorText.textContent = "Major";
    moderateText.textContent = "Moderate";
    criticalIcon.src = priorityClockRed;
    majorIcon.src = priorityClockYellow;
    moderateIcon.src = priorityClockBlue;

    // adding class
    priority.classList.add("priority");
    priorities.classList.add("priorities");
    prioritiesIcon.classList.add("icon");
    prioritiesIcon.classList.add("Arrow-icon");
    prioritiesText.classList.add("text");

    priorityContent.classList.add("priority-content");
    critical.classList.add("critical");
    major.classList.add("major");
    moderate.classList.add("moderate");
    criticalIcon.classList.add("icon");
    majorIcon.classList.add("icon");
    moderateIcon.classList.add("icon");
    criticalText.classList.add("text");
    majorText.classList.add("text");
    moderateText.classList.add("text");

    // append 
    sideHeader.insertAdjacentElement("beforeend", priority);
    priority.insertAdjacentElement("beforeend", priorities);
    priority.insertAdjacentElement("beforeend", priorityContent)
    priorities.insertAdjacentElement("beforeend", prioritiesIcon);
    priorities.insertAdjacentElement("beforeend", prioritiesText);
    priorityContent.insertAdjacentElement("beforeend", critical);
    priorityContent.insertAdjacentElement("beforeend", major);
    priorityContent.insertAdjacentElement("beforeend", moderate);
    critical.insertAdjacentElement("beforeend", criticalIcon);
    critical.insertAdjacentElement("beforeend", criticalText);
    major.insertAdjacentElement("beforeend", majorIcon);
    major.insertAdjacentElement("beforeend", majorText);
    moderate.insertAdjacentElement("beforeend", moderateIcon);
    moderate.insertAdjacentElement("beforeend", moderateText);
}

export {prioritiesIcon, priorities, priorityContent, critical, major, moderate};