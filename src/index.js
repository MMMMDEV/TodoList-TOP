import "./style.css";
import "./normalize.css";

import { firstLoad } from "./module/first-load";
import {todaySection, weekSection, monthSection, upcomingSection} from "./module-logic/todo";
import { addModule } from "./module/add-module";

firstLoad();
todaySection();
weekSection();
monthSection();
upcomingSection();
addModule();