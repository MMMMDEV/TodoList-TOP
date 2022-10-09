import todayClockIcon from "./images/time-twenty-four.svg";
import weekClockIcon from "./images/time-fast.svg";
import monthGridIcon from "./images/grid.svg";
import upcomingCalenderIcon from "./images/calendar-clock.svg";

const content = document.querySelector("#content");

export function firstLoad() {
    // creating objects
    const sideHeader = document.createElement("div");

    const todoList = document.createElement("div");

    const todayContainer = document.createElement("div");
    const todayIcon = document.createElement("img");
    const todayText = document.createElement("p");
    todayIcon.src = todayClockIcon;
    todayText.textContent = "Today";

    const weekContainer = document.createElement("div");
    const weekIcon = document.createElement("img");
    const weekText = document.createElement("p");
    weekIcon.src = weekClockIcon;
    weekText.textContent = "Week";

    const monthContainer = document.createElement("div");
    const monthIcon = document.createElement("img");
    const monthText = document.createElement("p");
    monthIcon.src = monthGridIcon;
    monthText.textContent = "Month";

    const upcomingContainer = document.createElement("div");
    const upcomingIcon = document.createElement("img");
    const upcomingText = document.createElement("p");
    upcomingIcon.src = upcomingCalenderIcon;
    upcomingText.textContent = "Upcoming";

    const priority = document.createElement("div");
    const projects = document.createElement("div");
    const adjustments = document.createElement("div");
    
    const main = document.createElement("div");

    // adding classes
    sideHeader.classList.add("side-header");

    todoList.classList.add("todo-list");

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

    priority.classList.add("priority");
    projects.classList.add("projects");
    adjustments.classList.add("adjustments");

    main.classList.add("main");

    // appending
    content.insertAdjacentElement("beforeend", sideHeader);
    content.insertAdjacentElement("beforeend", main);
    sideHeader.insertAdjacentElement("beforeend", todoList);
    sideHeader.insertAdjacentElement("beforeend", priority);
    sideHeader.insertAdjacentElement("beforeend", projects);
    sideHeader.insertAdjacentElement("beforeend", adjustments);
    todoList.insertAdjacentElement("beforeend", todayContainer);
    todoList.insertAdjacentElement("beforeend", weekContainer);
    todoList.insertAdjacentElement("beforeend", monthContainer);
    todoList.insertAdjacentElement("beforeend", upcomingContainer);
    todayContainer.insertAdjacentElement("beforeend", todayIcon);
    todayContainer.insertAdjacentElement("beforeend", todayText);
    weekContainer.insertAdjacentElement("beforeend", weekIcon);
    weekContainer.insertAdjacentElement("beforeend", weekText);
    monthContainer.insertAdjacentElement("beforeend", monthIcon);
    monthContainer.insertAdjacentElement("beforeend", monthText);
    upcomingContainer.insertAdjacentElement("beforeend", upcomingIcon);
    upcomingContainer.insertAdjacentElement("beforeend", upcomingText);
}