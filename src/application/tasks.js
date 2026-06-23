export function createtask(title,description,duedate,priority,notes,projectid,projectslist){
    let index=projectslist.findIndex(project=>project.id==projectid);
    let project=projectslist[index];
     let id=crypto.randomUUID();
    project.todos.push({
        title,description,duedate,priority,notes,completed:false,id
    });
}
export function markascomplete(task){
    task.completed=true;
}
export function changepriority(task,newpriority){
    task.priority=newpriority;
}
export function removetarget(projectslist,taskid,projectid){
    let index1=projectslist.findIndex(project=>project.id==projectid);
    let project=projectslist[index1];
    let index=project.todos.findIndex(task=>task.id==taskid);
    project.todos.splice(index,1);
}
export function findpriority(projectslist,taskid,projectid){
    let index1=projectslist.findIndex(project=>project.id==projectid);
    let project=projectslist[index1];
    let index=project.todos.findIndex(task=>task.id==taskid);
    return project.todos[index].priority;
}


