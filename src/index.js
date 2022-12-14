import "./style.css";
import "./normalize.css";

import { firstLoad } from "./module/first-load";
import {hidePriorities, hideSideHeader, prioritySelection, projects, sourcesFunction, todaySection} from "./module-logic/todo";
import { addModule } from "./module/add-module";

firstLoad();
todaySection();
addModule();
hideSideHeader();
hidePriorities();
prioritySelection();
projects();
sourcesFunction();