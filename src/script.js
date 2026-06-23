import{createproject,deleteproject,searchproject,renameproject,findprojectid} from "./application/projects.js";
import{createtask,markascomplete,changepriority, removetarget,renametask} from "./application/tasks.js";
import{addproject,addtask,marktaskcircle,removetaskfromdom,newprojectform,closeprojectform,removeproject,showtaskform,closetaskform} from "./dom/dom.js"
import "./style.css"; 
let projectslist=[];
createproject(projectslist,"Exercise");
createtask("Walking","have to walk man","20-06-2026","Low","NA",projectslist[0].id,projectslist);
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
        
        //new task
        let newtaskbutton=document.getElementById("task-col-newtask");
        newtaskbutton.addEventListener("click",()=>{
            taskform.dataset.mode="create";
            showtaskform(projectslist);
         }
        );
        //clicking on edit task button
        let taskidtorename = null;
        document.addEventListener("click",(e)=>{
            if(e.target.classList.contains("task-box-rename-img")){
                showtaskform(projectslist);
                taskform.dataset.mode="rename";
                taskidtorename=e.target.dataset.task;
                }
         });
        //clicking on the submit button of the form depending on to if to add new task or edit already existing task
        let closetaskbutton=document.getElementById("task-name-close");
         let taskform=document.getElementById("task-form-container");
         
         closetaskbutton.addEventListener("click",()=>{
            if(taskform.dataset.mode!="rename"){
            closetaskform();
            let name=document.getElementById("task-name-input");
            let description=document.getElementById("task-description-input");
            let duedate=document.getElementById("task-date-input");
            let priority=document.getElementById("task-priority");
            let notes=document.getElementById("task-notes-input");
            let projectname=document.getElementById("task-project-input");
            let projectid=findprojectid(projectname.value,projectslist);
            if((name.value!="")&& (description.value!="")&&(duedate.value!="")&&(priority.value!="")&&(notes.value!="")&&(projectname.value!="")){
            let task=createtask(name.value,description.value,duedate.value,priority.value,notes.value,projectid,projectslist);
            addtask(name.value,projectslist,task.id,projectid);
            }
        }
        else if(taskform.dataset.mode=="rename"){
            closetaskform();
            let name=document.getElementById("task-name-input");
            let description=document.getElementById("task-description-input");
            let duedate=document.getElementById("task-date-input");
            let priority=document.getElementById("task-priority");
            let notes=document.getElementById("task-notes-input");
            let projectname=document.getElementById("task-project-input");
            let projectid=findprojectid(projectname.value,projectslist);
            if((name.value!="")&& (description.value!="")&&(duedate.value!="")&&(priority.value!="")&&(notes.value!="")&&(projectname.value!="")){
               renametask(name.value,description.value,duedate.value,priority.value,notes.value,projectid,taskidtorename,projectslist);
               removetaskfromdom(taskidtorename);
               addtask(name.value,projectslist,taskidtorename,projectid);
            }
           }
        });
}
alleventlisteners();
