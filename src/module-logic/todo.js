import { todayContainer } from "../module/todo-list-module";
import { sectionText } from "../module/main-header-module";

import { weekContainer } from "../module/todo-list-module";
import { monthContainer } from "../module/todo-list-module";
import { upcomingContainer } from "../module/todo-list-module";

import {addIcon} from "../module/main-header-module";
import { addContainer, form, inputDate, inputDesc, inputTittle, overlay, submit} from "../module/add-module";
import { DoneDiv, mainContent, sectionTypeText } from "../module/main-content.module";

function todaySection() {
    const todayMain = document.createElement("div");
    todayMain.classList.add("today-main");
    
    todayContainer.addEventListener("click", e => {
        sectionText.textContent = "Today";
        sectionTypeText.textContent = "Today!";
    })
    addIcon.addEventListener("click", e => {
        addContainer.classList.add("active-add");
        overlay.classList.add("active-overlay");
        form.classList.add("form-active");
    })
    submit.addEventListener("click", e => {
        e.preventDefault();

        if (inputTittle.value != "" && inputDesc.value != "" && inputDate.value != "") {
            DoneDiv.remove();
            // create obj
            const item = document.createElement("div");
            const checkContainer = document.createElement("div");
            const buttonCheck = document.createElement("button");
            buttonCheck.type = "check";

            const tittleListContainer = document.createElement("div");
            const text = document.createElement("p");

            const removeContainer = document.createElement("div");
            const buttonRemove = document.createElement("button");

            // add class
            item.classList.add("item");
            checkContainer.classList.add("check-container");
            buttonCheck.classList.add("button-check");
            tittleListContainer.classList.add("tittle-list-container");
            text.classList.add("tittle-text");
            removeContainer.classList.add("remove-container");
            buttonRemove.classList.add("button-remove");

            // append
            mainContent.insertAdjacentElement("beforeend", item);
            item.insertAdjacentElement("beforeend", checkContainer);
            item.insertAdjacentElement("beforeend", tittleListContainer);
            item.insertAdjacentElement("beforeend", removeContainer);
            checkContainer.insertAdjacentElement("beforeend", buttonCheck);
            tittleListContainer.insertAdjacentElement("beforeend", text);
            removeContainer.insertAdjacentElement("beforeend", buttonRemove);

            // hidding form
            addContainer.classList.remove("active-add");
            overlay.classList.remove("active-overlay");
            form.classList.remove("form-active");
        }
        
        // reset form
        if (inputTittle.value.length > 0 && inputDesc.value.length > 0 && inputDate.value.length > 0) {
            inputTittle.value = "";
            inputDesc.value = "";
            inputDate.value = "";
        }
    })
}

function weekSection() {
    // create obj
    const weekMain = document.createElement("div");

    // add class
    weekMain.classList.add("week-main");
    
    weekContainer.addEventListener("click", e=> {
        sectionText.textContent = "Week";
        sectionTypeText.textContent = "Week!";
    })
    submit.addEventListener("click", e => {
        
    })
}

function monthSection() {
    // create obj
    const monthMain = document.createElement("div");

    // add class
    monthMain.classList.add("month-main");

    monthContainer.addEventListener("click", e=> {
        sectionText.textContent = "Month";
        sectionTypeText.textContent = "Month!";
    })
    submit.addEventListener("click", e => {
        
    })
}

function upcomingSection() {
    // create obj
    const upcomingMain = document.createElement("div");

    // add class
    upcomingMain.classList.add("upcoming-main");

    upcomingContainer.addEventListener("click", e=> {
        sectionText.textContent = "Upcoming";
        sectionTypeText.textContent = "Upcoming!";
    })
    submit.addEventListener("click", e => {
        
    })
}

export {todaySection, weekSection, monthSection, upcomingSection}


