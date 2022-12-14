import { sideHeader } from "./first-load";

import todayClockIcon from "../images/time-twenty-four.svg";
import weekClockIcon from "../images/time-fast.svg";
import monthGridIcon from "../images/grid.svg";
import upcomingCalenderIcon from "../images/calendar-clock.svg";

const todayContainer = document.createElement("div");
const weekContainer = document.createElement("div");
const monthContainer = document.createElement("div");
const upcomingContainer = document.createElement("div");
const TodoList = document.createElement("div");

export function todoList() {
    // create obj

    const todayIcon = document.createElement("img");
    const todayText = document.createElement("p");
    todayIcon.src = todayClockIcon;
    todayText.textContent = "Today";

    const weekIcon = document.createElement("img");
    const weekText = document.createElement("p");
    weekIcon.src = weekClockIcon;
    weekText.textContent = "Week";

    const monthIcon = document.createElement("img");
    const monthText = document.createElement("p");
    monthIcon.src = monthGridIcon;
    monthText.textContent = "Month";

    const upcomingIcon = document.createElement("img");
    const upcomingText = document.createElement("p");
    upcomingIcon.src = upcomingCalenderIcon;
    upcomingText.textContent = "Upcoming";

    // add class
    TodoList.classList.add("todo-list");

    todayContainer.classList.add("today-container");
    todayIcon.classList.add("today-icon");
    todayIcon.classList.add("icon");
    todayText.classList.add("text");

    weekContainer.classList.add("week-container");
    weekIcon.classList.add("week-icon");
    weekIcon.classList.add("icon");
    weekText.classList.add("text");

    monthContainer.classList.add("month-container");
    monthIcon.classList.add("month-icon");
    monthIcon.classList.add("icon");
    monthText.classList.add("text");

    upcomingContainer.classList.add("upcoming-container");
    upcomingIcon.classList.add("upcoming-icon");
    upcomingIcon.classList.add("icon");
    upcomingText.classList.add("text");

    // append
    sideHeader.insertAdjacentElement("beforeend", TodoList);
    TodoList.insertAdjacentElement("beforeend", todayContainer);
    TodoList.insertAdjacentElement("beforeend", weekContainer);
    TodoList.insertAdjacentElement("beforeend", monthContainer);
    TodoList.insertAdjacentElement("beforeend", upcomingContainer);
    todayContainer.insertAdjacentElement("beforeend", todayIcon);
    todayContainer.insertAdjacentElement("beforeend", todayText);
    weekContainer.insertAdjacentElement("beforeend", weekIcon);
    weekContainer.insertAdjacentElement("beforeend", weekText);
    monthContainer.insertAdjacentElement("beforeend", monthIcon);
    monthContainer.insertAdjacentElement("beforeend", monthText);
    upcomingContainer.insertAdjacentElement("beforeend", upcomingIcon);
    upcomingContainer.insertAdjacentElement("beforeend", upcomingText);
};

export {todayContainer, weekContainer, monthContainer, upcomingContainer, TodoList};