import{createproject,deleteproject,searchproject,renameproject} from "./application/projects.js";
import{createtask,markascomplete,changepriority, removetarget} from "./application/tasks.js";
import{addproject,addtask,marktaskcircle,removetaskfromdom,newprojectform,closeprojectform,removeproject} from "./dom/dom.js"
import "./style.css"; 
let projectslist=[];
createproject(projectslist,"Exercise");
createtask("Walking","have to walk man","20-06-2026","high","NA","Exercise",projectslist);
console.log(projectslist);
addproject(projectslist[0]);
addtask(projectslist[0].todos[0],projectslist[0]);


function alleventlisteners(){
    //clicking on circle button on each of the task
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
    //click on delete button
    document.addEventListener("click",(e)=>{
        if(e.target.classList.contains("task-box-img")){
             let projectname=e.target.dataset.project;
             let taskname=e.target.dataset.task;
             removetarget(projectslist,taskname,projectname);
            //  marktaskcircle(taskname);
            setTimeout(()=>{
             removetaskfromdom(taskname);
            },500);
        }
         }) 
         //adding project on clicking of new project button
         let newprojectbutton=document.getElementById("project-col-newproject");
         newprojectbutton.addEventListener("click",newprojectform);
         let closeprojectbutton=document.getElementById("project-name-close");
         let form=document.getElementById("project-form-container");
         if(form.dataset.mode=="create"){
         closeprojectbutton.addEventListener("click",()=>{
            closeprojectform();
            let input=document.getElementById("project-name-input");
            if(input.value!="")createproject(projectslist,input.value);
            if(input.value!="")addproject(input.value);
         });
        }

         //clicking on rename button
         document.addEventListener("click",(e)=>{
            if(e.target.classList.contains("project-box-rename-img")){
                newprojectform();
                form.dataset.mode="rename";
                let projectname=e.target.dataset.project;
                if(form.dataset.mode=="rename"){
                    closeprojectbutton.addEventListener("click",()=>{
                       closeprojectform();
                       let input=document.getElementById("project-name-input");
                       if(input.value!="")renameproject(input.value,projectslist,projectname);
                       if(input.value!="")removeproject(projectname);
                       if(input.value!="")addproject(input.value);
                    });
                   }
                }
         });
}
alleventlisteners();
