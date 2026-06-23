export function createproject(projectslist,name){
    const todos=[];
    let id=crypto.randomUUID();
    let project={name,todos,id};
    projectslist.push(project);
    return project;
}
export function deleteproject(projectslist,projectid){
let index=projectslist.findIndex(project=>project.id==projectid);
projectslist.splice(index,1);
}

export function searchproject(projectslist,projectid){
let index=projectslist.findIndex(project=>project.id==projectid);
if(index==-1)alert("project not found");
return projectslist[index];
}

export function renameproject(newname,projectslist,projectid){
    let index=projectslist.findIndex(project=>project.id==projectid);
    projectslist[index].name=newname;
}
export function findprojectid(projectname,projectslist){
let index=projectslist.findIndex(project=>project.name==projectname);
return projectslist[index].id;
}

