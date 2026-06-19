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
div.style.borderBottom="3px solid red"
projectscol.appendChild(div);
}