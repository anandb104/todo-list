import deleteimage from "../images/delete-circle.svg";
import renameimg from "../images/rename-box.svg"
export function addproject(projectname){
const projectscol=document.getElementById("projects-col");
let parentdiv=document.createElement("div");
parentdiv.textContent=projectname.name;
parentdiv.style.display="flex";
parentdiv.style.justifyContent="space-between";
parentdiv.style.alignItems="center";
parentdiv.style.gap=22+"rem";
parentdiv.style.height=5+"rem";
parentdiv.style.width=28.96+"rem";
parentdiv.style.fontSize="20px";
parentdiv.style.fontWeight="bold";
parentdiv.style.borderBottom="3px solid black";
parentdiv.dataset.project=projectname;
parentdiv.setAttribute("class","project-div");
projectscol.appendChild(parentdiv);
createrenamebuttonproject(parentdiv,projectname);
}
export function addtask(taskname,projectname){
    const projectscol=document.getElementById("tasks-col");
    const taskcircle=document.createElement("div");
    taskcircle.dataset.task=taskname;
    taskcircle.dataset.project=projectname;
    let parentdiv=document.createElement("div");
    parentdiv.dataset.task=taskname;
    parentdiv.dataset.project=projectname;
    let div=document.createElement("div");
    taskcircle.setAttribute("class","task-circle");
    div.setAttribute("class","task-box-text");
    parentdiv.setAttribute("class","task-box");
    div.textContent=taskname.title;
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
    parentdiv.appendChild(subparentdiv);
    createdeletebutton(subparentdiv,taskname,projectname);
    createrenamebutton(subparentdiv,taskname,projectname);
    }

export function marktaskcircle(taskname){
    let taskcircle=document.querySelectorAll(".task-circle");
taskcircle.forEach(element => {
    if(element.dataset.task==taskname){
        element.style.backgroundColor="green";
    }
});
}
export function removetaskfromdom(taskname){
    let taskbox=document.querySelectorAll(".task-box");
    taskbox.forEach(element => {
    if(element.dataset.task==taskname){
        element.remove();
    }
});
}

function createdeletebutton(parentdiv,taskname,projectname){
let img=document.createElement("img");
img.src=deleteimage;
img.dataset.task=taskname;
img.dataset.project=projectname;
img.setAttribute("class","task-box-img");
parentdiv.appendChild(img);
}

function createrenamebutton(parentdiv,taskname,projectname){
    let img=document.createElement("img");
    img.src=renameimg;
    img.dataset.task=taskname;
    img.dataset.project=projectname;
    img.setAttribute("class","task-box-rename-img");
    parentdiv.appendChild(img);
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

 function createrenamebuttonproject(parentdiv,projectname){
    let img=document.createElement("img");
    img.src=renameimg;
    img.dataset.project=projectname;
    img.setAttribute("class","project-box-rename-img");
    parentdiv.appendChild(img);
 }
 export function removeproject(projectname){
    let taskbox=document.querySelectorAll(".project-div");
    taskbox.forEach(element => {
    if(element.dataset.project==projectname){
        element.remove();
    }
});
 }