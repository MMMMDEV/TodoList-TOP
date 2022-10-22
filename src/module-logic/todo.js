import { todayContainer } from "../module/todo-list-module";
import { hideIcon, sectionText } from "../module/main-header-module";

import { weekContainer } from "../module/todo-list-module";
import { monthContainer } from "../module/todo-list-module";
import { upcomingContainer } from "../module/todo-list-module";

import {addIcon} from "../module/main-header-module";
import { addContainer, form, inputDate, inputDesc, inputTittle, overlay, submit} from "../module/add-module";
import { DoneDiv, mainContent, sectionTypeText } from "../module/main-content.module";
import { content, main, sideHeader } from "../module/first-load";
import { endOfWeek, format, lastDayOfMonth, startOfWeek} from 'date-fns'
import { critical, major, moderate, priorities, prioritiesIcon, priorityContent} from "../module/priorities-module";

const underConstruction = document.createElement("div");

function todaySection() {
    const todayMain = document.createElement("div");
    const weekMain = document.createElement("div");
    const monthMain = document.createElement("div");
    const upcomingMain = document.createElement("div");
    todayMain.classList.add("todoT-main");
    weekMain.classList.add("todoW-main");
    monthMain.classList.add("todoM-main");
    upcomingMain.classList.add("todoU-main");
    let currentSection = todayMain;
    let today = format(new Date(), "yyyy-MM-dd");
    let firstDayOfMonth = format(new Date(), "yyyy-MM-01");
    let lastDateOfMonth = format(lastDayOfMonth(new Date()), "yyyy-MM-dd");
    let currentWeekStart = format(startOfWeek(new Date()), "dd");
    let currentWeekEnd = format(endOfWeek(new Date()), "dd");
    let currentyear = format(new Date(), "yyyy");
    let currentMonth = format(new Date(), "MM");

    
    // today
    todayContainer.addEventListener("click", e => {
        sectionText.textContent = "Today";
        sectionTypeText.textContent = "Today!";
        weekMain.remove();
        monthMain.remove();
        upcomingMain.remove();
        underConstruction.remove();
        currentSection = todayMain;
        addIcon.style.pointerEvents = "all";
        if (todayMain.hasChildNodes()) {
            DoneDiv.remove();
            mainContent.appendChild(todayMain);
            todayMain.classList.add("main-todo-active");
            mainContent.style.alignItems = "flex-start";
        } else {
            mainContent.style.alignItems = "center";
            mainContent.append(DoneDiv);
        }
    })
    
    // week
    weekContainer.addEventListener("click", e=> {
        sectionText.textContent = "Week";
        sectionTypeText.textContent = "Week!";
        todayMain.remove();
        monthMain.remove();
        upcomingMain.remove();
        underConstruction.remove();
        currentSection = weekMain;
        addIcon.style.pointerEvents = "all";
        if (weekMain.hasChildNodes()) {
            DoneDiv.remove();
            mainContent.appendChild(weekMain);
            weekMain.classList.add("main-todo-active");
            mainContent.style.alignItems = "flex-start";
        } else {
            mainContent.style.alignItems = "center";
            todayMain.classList.remove("main-todo-active");
            mainContent.append(DoneDiv);
        }
    })
    
    // month
    monthContainer.addEventListener("click", e=> {
        sectionText.textContent = "Month";
        sectionTypeText.textContent = "Month!";
        todayMain.remove();
        weekMain.remove();
        upcomingMain.remove();
        underConstruction.remove();
        currentSection = monthMain;
        addIcon.style.pointerEvents = "all";
        if (monthMain.hasChildNodes()) {
            DoneDiv.remove();
            mainContent.appendChild(monthMain);
            monthMain.classList.add("main-todo-active");
            mainContent.style.alignItems = "flex-start";
        } else {
            mainContent.style.alignItems = "center";
            mainContent.append(DoneDiv);
        }
    })
    
    // upcoming
    upcomingContainer.addEventListener("click", e=> {
        sectionText.textContent = "Upcoming";
        sectionTypeText.textContent = "Upcoming!";
        todayMain.remove();
        weekMain.remove();
        monthMain.remove();
        underConstruction.remove();
        addIcon.style.pointerEvents = "all";
        currentSection = upcomingMain;
        if (todayMain.hasChildNodes()) {
            DoneDiv.remove();
            mainContent.appendChild(upcomingMain);
            upcomingMain.classList.add("main-todo-active");
            mainContent.style.alignItems = "flex-start";
        } else {
            mainContent.style.alignItems = "center";
            mainContent.append(DoneDiv);
        }
    })
    
    // addIcon
    addIcon.addEventListener("click", e => {
        addContainer.classList.add("active-add");
        overlay.classList.add("active-overlay");
        form.classList.add("form-active");
        
        // form date
        switch (currentSection) {
            case todayMain:
                inputDate.min = today;
                inputDate.max = today;
                inputDate.value = today;
                inputDate.style.cursor = "not-allowed";
                inputDate.required = false;
                inputDate.style.pointerEvents = "none";
                break;
                case weekMain:
                    inputDate.min = currentyear + "-" + currentMonth + "-" + currentWeekStart;
                    inputDate.max = currentyear + "-" + currentMonth + "-" + currentWeekEnd;
                    inputDate.value = today;
                    inputDate.style.cursor = "pointer";
                    inputDate.required = true;
                    inputDate.style.pointerEvents = "all";
                    break;
                    case monthMain:
                        inputDate.min = today;
                        inputDate.max = lastDateOfMonth;
                inputDate.value = today;
                inputDate.style.cursor = "pointer";
                inputDate.required = true;
                inputDate.style.pointerEvents = "all";
                break;
                case upcomingMain:
                    inputDate.min = today;
                    inputDate.max = "none";
                    inputDate.value = today;
                    inputDate.style.cursor = "pointer";
                    inputDate.required = true;
                    inputDate.style.pointerEvents = "all";
                    break;
                }
            })
            
            // submit
            submit.addEventListener("click", e => {
                e.preventDefault();
                if (inputTittle.value != "" && inputDesc.value != "" && inputDate.value != "") {
            let tittleVal = inputTittle.value;
            let descVal = inputDesc.value;
            let dateVal = inputDate.value;
            
            DoneDiv.remove();
            // create obj
            const item = document.createElement("div");
            const checkContainer = document.createElement("div");
            const buttonCheck = document.createElement("input");
            buttonCheck.type = "checkbox";
            const topItem = document.createElement("div");
            const middleItem = document.createElement("div");
            const descContainer = document.createElement("div");
            const desc = document.createElement("p");
            const endItem = document.createElement("div");
            const dateP = document.createElement("p");
            dateP.textContent = "";
            desc.textContent = "";
            
            const tittleListContainer = document.createElement("div");
            const text = document.createElement("p");
            text.textContent = tittleVal;
            
            const removeContainer = document.createElement("div");
            const sideOneRemove = document.createElement("div");
            const sideTwoRemove = document.createElement("div");
            
            // add class
            currentSection.classList.add("main-todo-active");
            item.classList.add("item");
            topItem.classList.add("top-item");
            topItem.classList.add("top-end-item-active");
            checkContainer.classList.add("check-container");
            buttonCheck.classList.add("button-check");
            middleItem.classList.add("middle-item");
            descContainer.classList.add("desc-container");
            desc.classList.add("desc");
            endItem.classList.add("end-item");
            dateP.classList.add("date-p");
            tittleListContainer.classList.add("tittle-list-container");
            text.classList.add("tittle-text");
            removeContainer.classList.add("remove-container");
            sideOneRemove.classList.add("side-one-remove");
            sideTwoRemove.classList.add("side-two-remove");
            mainContent.style.alignItems = "flex-start";
            
            // append
            mainContent.insertAdjacentElement("beforeend", currentSection);
            currentSection.insertAdjacentElement("beforeend", item);
            item.insertAdjacentElement("beforeend", topItem);
            item.insertAdjacentElement("beforeend", middleItem);
            item.insertAdjacentElement("beforeend", endItem);
            topItem.insertAdjacentElement("beforeend", checkContainer);
            topItem.insertAdjacentElement("beforeend", tittleListContainer);
            topItem.insertAdjacentElement("beforeend", removeContainer);
            checkContainer.insertAdjacentElement("beforeend", buttonCheck);
            tittleListContainer.insertAdjacentElement("beforeend", text);
            middleItem.insertAdjacentElement("beforeend", descContainer);
            descContainer.insertAdjacentElement("beforeend", desc);
            endItem.insertAdjacentElement("beforeend", dateP);
            removeContainer.insertAdjacentElement("beforeend", sideOneRemove);
            removeContainer.insertAdjacentElement("beforeend", sideTwoRemove);
            
            // hidding form
            addContainer.classList.remove("active-add");
            overlay.classList.remove("active-overlay");
            form.classList.remove("form-active");
            
            buttonCheck.addEventListener("click", e => {
                if (buttonCheck.checked === true) {
                    text.style.color = "#959595";
                    text.style.textDecoration = "line-through";
                    desc.style.color = "#959595";
                    desc.style.textDecoration = "line-through";
                    dateP.style.color = "#959595";
                    dateP.style.textDecoration = "line-through";
                } else {
                    text.style.color = "#fafafa";
                    text.style.textDecoration = "none";
                    desc.style.color = "#fafafa";
                    desc.style.textDecoration = "none";
                    dateP.style.color = "#fafafa";
                    dateP.style.textDecoration = "none";
                }
            })
            
            // item expand
            
            let expand = false;

            item.addEventListener("click", e => {

                expand = !expand;

                if (e.target === buttonCheck || e.target === removeContainer || e.target === sideOneRemove || e.target === sideTwoRemove) {
                    return;
                } else {
                    if (expand === true) {
                        item.classList.add("item-expand");
                        middleItem.classList.add("middle-item-active");
                        endItem.classList.add("top-end-item-active");
                        setTimeout(() => {
                            desc.textContent = descVal;
                            dateP.textContent = "Due   " + dateVal;
                        }, "400");
                    } else {
                        item.classList.remove("item-expand");
                        middleItem.classList.remove("middle-item-active");
                        endItem.classList.remove("top-end-item-active");
                        desc.textContent = "";
                        dateP.textContent = "";
                        
                    }
                }
            })
            
            // item remove
            
            sideOneRemove.addEventListener("click", e => {
                item.remove();
                currentSection.remove();
                mainContent.append(DoneDiv);
                mainContent.style.alignItems = "center";
            })
            sideTwoRemove.addEventListener("click", e => {
                item.remove();
                currentSection.remove();
                mainContent.append(DoneDiv);
                mainContent.style.alignItems = "center";
            })
            
        }
        
        // reset form
        if (inputTittle.value.length > 0 && inputDesc.value.length > 0 && inputDate.value.length > 0) {
            inputTittle.value = "";
            inputDesc.value = "";
            inputDate.value = "";
        }
    })
}

function hideSideHeader() {
    let hide = false;
    
    hideIcon.addEventListener("click", e => {
        hide = !hide;
        switch (hide) {
            case true:
                hideIcon.style.rotate = "-90deg";
                sideHeader.remove();
                main.classList.add("main-strech");
                main.classList.remove("main-active");
                break;
                
            case false:
                hideIcon.style.rotate = "0deg";
                content.insertAdjacentElement("beforeend", sideHeader);
                main.classList.remove("main-strech");
                main.classList.add("main-active");
                break;
        }
    }) 
}
              
function hidePriorities() {
    let hide  = false;

    priorities.addEventListener("click", e => {
        hide = !hide;
        switch (hide) {
            case true:
                prioritiesIcon.style.rotate = "0deg";
                setTimeout(() => {
                    priorityContent.classList.add("priority-content-hide");
                }, "400");
                break;

            case false:
                prioritiesIcon.style.rotate = "-90deg";
                setTimeout(() => {
                    priorityContent.classList.remove("priority-content-hide");
                }, "400");
                break;
        }
    })
};

function prioritySelection() {
    const constructionText = document.createElement("p");
    constructionText.textContent = "Section still under construction!";
    
    underConstruction.classList.add("under-construction");
    constructionText.classList.add("construction-text");

    underConstruction.append(constructionText);

    let currentPriority;

    critical.addEventListener("click", e => {
        currentPriority = critical;
        DoneDiv.remove();
        mainContent.append(underConstruction);
        sectionText.textContent = "Critical";
        addIcon.style.pointerEvents = "none";
    })

    major.addEventListener("click", e => {
        currentPriority = major;
        DoneDiv.remove();
        mainContent.append(underConstruction);
        sectionText.textContent = "Major";
        addIcon.style.pointerEvents = "none";
    })

    moderate.addEventListener("click", e => {
        currentPriority = moderate;
        DoneDiv.remove();
        mainContent.append(underConstruction);
        sectionText.textContent = "Moderate";
        addIcon.style.pointerEvents = "none";
    })

    switch (currentPriority) {
        case critical:
            break;
    }
}

export {todaySection, hideSideHeader, hidePriorities, prioritySelection} ;