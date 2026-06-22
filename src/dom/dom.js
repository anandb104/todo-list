import deleteimage from "../images/delete-circle.svg";
import{findpriority} from "../application/tasks.js";
import renameimg from "../images/rename-box.svg"
export function addproject(projectid,projectname){
const projectscol=document.getElementById("projects-col");
let parentdiv=document.createElement("div");
parentdiv.textContent=projectname;
parentdiv.style.display="flex";
parentdiv.style.justifyContent="space-between";
parentdiv.style.alignItems="center";
// parentdiv.style.gap=4+"rem";
parentdiv.style.height=5+"rem";
parentdiv.style.width=27+"rem";
parentdiv.style.fontSize="20px";
parentdiv.style.fontWeight="bold";
parentdiv.style.borderBottom="3px solid black";
parentdiv.dataset.project=projectid;
parentdiv.setAttribute("class","project-div");
projectscol.appendChild(parentdiv);
createrenamebuttonproject(parentdiv,projectid);
}
export function addtask(taskname,projectslist,taskid,projectid){
    const projectscol=document.getElementById("tasks-col");
    const taskcircle=document.createElement("div");
    taskcircle.dataset.task=taskid;
    taskcircle.dataset.project=projectid;
    let parentdiv=document.createElement("div");
    parentdiv.dataset.task=taskid;
    parentdiv.dataset.project=projectid;
    let div=document.createElement("div");
    taskcircle.setAttribute("class","task-circle");
    div.setAttribute("class","task-box-text");
    parentdiv.setAttribute("class","task-box");
    div.textContent=taskname;
    parentdiv.style.display="flex";
    div.style.alignItems="center";
    parentdiv.style.height=5+"rem";
    parentdiv.style.width=48.2+"rem";
    parentdiv.style.fontSize="20px";
    div.style.fontWeight="bold";
    parentdiv.style.borderBottom="3px solid black";
    projectscol.appendChild(parentdiv);
    parentdiv.appendChild(taskcircle);
    parentdiv.appendChild(div);
    let subparentdiv=document.createElement("div");
    subparentdiv.style.display='flex';
    subparentdiv.style.flexDirection='row';
    subparentdiv.style.gap='0.3rem';
    parentdiv.appendChild(subparentdiv);
    createprioritybutton(subparentdiv,taskid,projectid,projectslist);
    createdeletebutton(subparentdiv,taskid,projectid);
    createrenamebutton(subparentdiv,taskid,projectid);
    }

export function marktaskcircle(taskid){
    let taskcircle=document.querySelectorAll(".task-circle");
taskcircle.forEach(element => {
    if(element.dataset.task==taskid){
        element.style.backgroundColor="green";
    }
});
}
export function removetaskfromdom(taskid){
    let taskbox=document.querySelectorAll(".task-box");
    taskbox.forEach(element => {
    if(element.dataset.task==taskid){
        element.remove();
    }
});
}

function createdeletebutton(parentdiv,taskid,projectid){
let img=document.createElement("img");
img.src=deleteimage;
img.dataset.task=taskid;
img.dataset.project=projectid;
img.setAttribute("class","task-box-img");
parentdiv.appendChild(img);
}

function createrenamebutton(parentdiv,taskid,projectid){
    let img=document.createElement("img");
    img.src=renameimg;
    img.dataset.task=taskid;
    img.dataset.project=projectid;
    img.setAttribute("class","task-box-rename-img");
    parentdiv.appendChild(img);
 }

 function createprioritybutton(parentdiv,taskid,projectid,projectslist){
    let div=document.createElement("div");
    div.dataset.task=taskid;
    div.dataset.project=projectid;
    div.setAttribute("class","task-box-priority");
    let priority=findpriority(projectslist,taskid,projectid);
    div.textContent=priority;
    div.style.backgroundColor='black';
    if(priority=="High"){
        div.style.color='red';
    }
    else if(priority=="Low"){
        div.style.color='green';
    }
    if(priority=="Medium"){
        div.style.color='orange';
    }
    div.addEventListener("mouseenter",()=>{
        div.style.color='white';
    });
    div.addEventListener("mouseleave",()=>{
        if(priority=="High"){
            div.style.color='red';
        }
        else if(priority=="Low"){
            div.style.color='green';
        }
        if(priority=="Medium"){
            div.style.color='orange';
        }
    })
    parentdiv.appendChild(div);
 }

 export function newprojectform(){
   let form=document.getElementById("project-form-container");
   form.dataset.mode="create";
   form.style.display="flex";
   let overlay=document.getElementById("overlay");
   overlay.style.display="block";
 }

 export function closeprojectform(){
    let form=document.getElementById("project-form-container");
   form.style.display="none";
   let overlay=document.getElementById("overlay");
   overlay.style.display="none";
 }

 function createrenamebuttonproject(parentdiv,projectid){
    let img=document.createElement("img");
    img.src=renameimg;
    img.dataset.project=projectid;
    img.setAttribute("class","project-box-rename-img");
    parentdiv.appendChild(img);
 }
 export function removeproject(projectid){
    let taskbox=document.querySelectorAll(".project-div");
    taskbox.forEach(element => {
    if(element.dataset.project==projectid){
        element.remove();
    }
});
 }