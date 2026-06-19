export function addproject(projectname){
const projectscol=document.getElementById("projects-col");
let div=document.createElement("div");
div.textContent=projectname;
div.style.display="flex";
div.style.justifyContent="center";
div.style.alignItems="center";
div.style.height=5+"rem";
div.style.width=30+"rem";
div.style.fontSize="20px";
div.style.fontWeight="bold";
div.style.borderBottom="3px solid black";
projectscol.appendChild(div);
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
    div.textContent=taskname;
    parentdiv.style.display="flex";
    div.style.alignItems="center";
    parentdiv.style.height=5+"rem";
    parentdiv.style.width=50+"rem";
    parentdiv.style.fontSize="20px";
    div.style.fontWeight="bold";
    parentdiv.style.borderBottom="3px solid black";
    projectscol.appendChild(parentdiv);
    parentdiv.appendChild(taskcircle);
    parentdiv.appendChild(div);
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