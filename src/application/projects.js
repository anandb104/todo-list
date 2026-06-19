export function createproject(projectslist,name){
    const todos=[];
    projectslist.push({name,todos});
}
export function deleteproject(projectslist,projectname){
let index=projectslist.findIndex(project=>project.name==projectname);
projectslist.splice(index,1);
}

export function searchproject(projectslist,projectname){
let index=projectslist.findIndex(project=>project.name==projectname);
if(index==-1)alert("project not found");
return projectslist[index];
}

export function renameproject(newname,projectslist,projectname){
    let index=projectslist.findIndex(project=>project.name==projectname);
    projectslist[index].name=newname;
}

