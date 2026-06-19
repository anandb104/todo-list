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
div.style.borderBottom="3px solid black"
projectscol.appendChild(div);
}
export function addtask(taskname){
    const projectscol=document.getElementById("tasks-col");
    let div=document.createElement("div");
    div.textContent=taskname;
    div.style.display="flex";
    div.style.justifyContent="center";
    div.style.alignItems="center";
    div.style.height=5+"rem";
    div.style.width=50+"rem";
    div.style.fontSize="20px";
    div.style.fontWeight="bold";
    div.style.borderBottom="3px solid blue";
    projectscol.appendChild(div);
    }