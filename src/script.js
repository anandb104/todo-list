import{createproject,deleteproject,searchproject,renameproject} from "./application/projects.js";
import{createtask,markascomplete,changepriority, removetarget} from "./application/tasks.js";
import{addproject,addtask,marktaskcircle,removetaskfromdom} from "./dom/dom.js"
import "./style.css"; 
let projectslist=[];
createproject(projectslist,"Exercise");
createtask("Walking","have to walk man","20-06-2026","high","NA","Exercise",projectslist);
console.log(projectslist);
addproject("Exercise");
addtask("Walking","Exercise");

function alleventlisteners(){
   document.addEventListener("click",(e)=>{
   if(e.target.classList.contains("task-circle")){
        let projectname=e.target.dataset.project;
        let taskname=e.target.dataset.task;
        removetarget(projectslist,taskname,projectname);
        marktaskcircle(taskname);
       setTimeout(()=>{
        removetaskfromdom(taskname);
       },500);
   }
    })
}
alleventlisteners();
