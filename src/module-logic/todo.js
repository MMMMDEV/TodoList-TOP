import { todayContainer } from "../module/todo-list-module";
import { addNewItem, headerMain, hideIcon, sectionText } from "../module/main-header-module";

import { weekContainer } from "../module/todo-list-module";
import { monthContainer } from "../module/todo-list-module";
import { upcomingContainer } from "../module/todo-list-module";

import {addIcon} from "../module/main-header-module";
import { addContainer, form, inputDate, inputDesc, inputTittle, overlay, submit} from "../module/add-module";
import { DoneDiv, mainContent, sectionTypeText } from "../module/main-content.module";
import { content, main, sideHeader } from "../module/first-load";
import { endOfWeek, format, lastDayOfMonth, startOfWeek} from 'date-fns'
import { critical, major, moderate, priorities, prioritiesIcon, priorityContent} from "../module/priorities-module";
import { addProject, project, projectIcon } from "../module/projects-module";
import { sources } from "../module/adjustments-module";

const underConstruction = document.createElement("div");
const underConstructionP = document.createElement("div");
const sourcesMain = document.createElement("div");
const todayMain = document.createElement("div");
const weekMain = document.createElement("div");
const monthMain = document.createElement("div");
const upcomingMain = document.createElement("div");
let currentSection = todayMain;

function todaySection() {
    todayMain.classList.add("todoT-main");
    weekMain.classList.add("todoW-main");
    monthMain.classList.add("todoM-main");
    upcomingMain.classList.add("todoU-main");
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
        underConstructionP.remove();
        sourcesMain.remove();
        currentSection = todayMain;
        addIcon.style.pointerEvents = "all";
        if (!headerMain.contains(addNewItem)) {
            headerMain.insertAdjacentElement("beforeend", addNewItem);
        }
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
        underConstructionP.remove();
        sourcesMain.remove();
        currentSection = weekMain;
        if (!headerMain.contains(addNewItem)) {
            headerMain.insertAdjacentElement("beforeend", addNewItem);
        }
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
        underConstructionP.remove();
        sourcesMain.remove();
        currentSection = monthMain;
        if (!headerMain.contains(addNewItem)) {
            headerMain.insertAdjacentElement("beforeend", addNewItem);
        }
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
        underConstructionP.remove();
        sourcesMain.remove();
        currentSection = upcomingMain;
        if (!headerMain.contains(addNewItem)) {
            headerMain.insertAdjacentElement("beforeend", addNewItem);
        }
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
                mainContent.style.alignItems = "flex-start";
                
                // append
                mainContent.insertAdjacentElement("beforeend", currentSection);
                currentSection.insertAdjacentElement("beforeend", item);
                item.insertAdjacentElement("beforeend", topItem);
                item.insertAdjacentElement("beforeend", middleItem);
                item.insertAdjacentElement("beforeend", endItem);
                topItem.insertAdjacentElement("beforeend", checkContainer);
                topItem.insertAdjacentElement("beforeend", tittleListContainer);
                checkContainer.insertAdjacentElement("beforeend", buttonCheck);
                tittleListContainer.insertAdjacentElement("beforeend", text);
                middleItem.insertAdjacentElement("beforeend", descContainer);
                descContainer.insertAdjacentElement("beforeend", desc);
                endItem.insertAdjacentElement("beforeend", dateP);
                
                        
                // hidding form
                addContainer.classList.remove("active-add");
                overlay.classList.remove("active-overlay");
                form.classList.remove("form-active");
                
                // delete item
                buttonCheck.addEventListener("click", e => {
                    if (buttonCheck.checked === true) {
                        item.remove();

                        if (!currentSection.hasChildNodes()) {
                            currentSection.remove();
                            mainContent.append(DoneDiv);
                            mainContent.style.alignItems = "center";
                        }
                    }
                })
            
            // item expand
            
            let expand = false;

            item.addEventListener("click", e => {

                expand = !expand;

                if (e.target === buttonCheck) {
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
    const constructionTextP = document.createElement("p");
    constructionTextP.textContent = "Section still under construction!";
    
    underConstructionP.classList.add("under-construction");
    constructionTextP.classList.add("construction-text");

    underConstructionP.append(constructionTextP);

    critical.addEventListener("click", e => {
        DoneDiv.remove();
        addNewItem.remove();
        sourcesMain.remove();
        mainContent.append(underConstructionP);
        underConstruction.remove();
        sectionText.textContent = "Critical";
    })

    major.addEventListener("click", e => {
        DoneDiv.remove();
        addNewItem.remove();
        sourcesMain.remove();
        mainContent.append(underConstructionP);
        underConstruction.remove();
        sectionText.textContent = "Major";
    })

    moderate.addEventListener("click", e => {
        DoneDiv.remove();
        addNewItem.remove();
        sourcesMain.remove();
        mainContent.append(underConstructionP);
        underConstruction.remove();
        sectionText.textContent = "Moderate";
    })
}

function projects() {
    const constructionText = document.createElement("p");
    constructionText.textContent = "Section still under construction!";
    
    underConstruction.classList.add("under-construction");
    constructionText.classList.add("construction-text");

    underConstruction.append(constructionText);

    let hideProject = false;

    addProject.addEventListener("click", e => {
        DoneDiv.remove();
        sourcesMain.remove();
        underConstructionP.remove();
        mainContent.append(underConstruction);
        sectionText.textContent = "Projects";
    }); 
    
    project.addEventListener("click", e => {
        hideProject = !hideProject;
        if (hideProject) {
            projectIcon.style.rotate = "0deg";
        } else {
            projectIcon.style.rotate = "-90deg";
        }
    })
}

function sourcesFunction() {
    const iconLink = document.createElement("a");
    sources.addEventListener("click", e => {
        DoneDiv.remove();
        underConstruction.remove();
        underConstructionP.remove();
        addNewItem.remove();
        sectionText.textContent = "Sources";
        
        iconLink.textContent = "All icons have been gathered from Flaticon, uicons. This is a link to that exact page.";

        sourcesMain.classList.add("sources-main");
        iconLink.classList.add("icon-link");
        iconLink.href = "https://www.flaticon.com/uicons/interface-icons";

        mainContent.append(sourcesMain);
        sourcesMain.append(iconLink);
    })
}

export {todaySection, hideSideHeader, hidePriorities, prioritySelection, projects, sourcesFunction, todayMain, weekMain, monthMain, upcomingMain} ;