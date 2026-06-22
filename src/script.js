import{createproject,deleteproject,searchproject,renameproject} from "./application/projects.js";
import{createtask,markascomplete,changepriority, removetarget} from "./application/tasks.js";
import{addproject,addtask,marktaskcircle,removetaskfromdom,newprojectform,closeprojectform,removeproject} from "./dom/dom.js"
import "./style.css"; 
let projectslist=[];
createproject(projectslist,"Exercise");
createtask("Walking","have to walk man","20-06-2026","LOW","NA",projectslist[0].id,projectslist);
addproject(projectslist[0].id,"Exercise");
addtask(projectslist[0].todos[0].title,projectslist,projectslist[0].todos[0].id,projectslist[0].id);

function alleventlisteners(){
    //clicking on circle button on each of the task
   document.addEventListener("click",(e)=>{
   if(e.target.classList.contains("task-circle")){
        let projectid=e.target.dataset.project;
        let taskid=e.target.dataset.task;
        removetarget(projectslist,taskid,projectid);
        marktaskcircle(taskid);
       setTimeout(()=>{
        removetaskfromdom(taskid);
       },500);
   }
    }) 
    //click on delete button
    document.addEventListener("click",(e)=>{
        if(e.target.classList.contains("task-box-img")){
             let projectid=e.target.dataset.project;
             let taskid=e.target.dataset.task;
             removetarget(projectslist,taskid,projectid);
            //  marktaskcircle(taskname);
            setTimeout(()=>{
             removetaskfromdom(taskid);
            },500);
        }
         }) 
         //adding project on clicking of new project button
         let newprojectbutton=document.getElementById("project-col-newproject");
         newprojectbutton.addEventListener("click",()=>{
            form.dataset.mode="create"
            newprojectform();
         }
        );

         // clicking on rename button
         let projectidtorename = null;
        document.addEventListener("click",(e)=>{
            if(e.target.classList.contains("project-box-rename-img")){
                newprojectform();
                form.dataset.mode="rename";
                projectidtorename=e.target.dataset.project;
                }
         });
         let closeprojectbutton=document.getElementById("project-name-close");
         let form=document.getElementById("project-form-container");
         
         closeprojectbutton.addEventListener("click",()=>{
            if(form.dataset.mode!="rename"){
            closeprojectform();
            let input=document.getElementById("project-name-input");
            if(input.value!=""){
            let project=createproject(projectslist,input.value);
            addproject(project.id,project.name);
            }
        }
        else if(form.dataset.mode=="rename"){
               closeprojectform();
               let input=document.getElementById("project-name-input");
               if(input.value!="")renameproject(input.value,projectslist,projectidtorename);
               if(input.value!="")removeproject(projectidtorename);
               if(input.value!="")addproject(projectidtorename,input.value);
           }
        });
}
alleventlisteners();
