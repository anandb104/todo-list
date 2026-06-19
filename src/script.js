import{createproject,deleteproject,searchproject,renameproject} from "./application/projects.js";
import{createtask,markascomplete,changepriority} from "./application/tasks.js";
import{addproject} from "./dom/dom.js"

let projectslist=[];
createproject(projectslist,"Exercise");
createtask("walking","have to walk man","20-06-2026","high","NA","Exercise",projectslist);
console.log(projectslist);
addproject("Exercise");


