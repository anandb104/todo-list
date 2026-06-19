import{createproject,deleteproject,searchproject,renameproject} from "./application/projects.js";
import{createtask,markascomplete,changepriority} from "./application/tasks.js"
let projectslist=[];
createproject(projectslist,"exercise");
createtask("walking","have to walk man","20-06-2026","high","NA","exercise",projectslist);
console.log(projectslist);


