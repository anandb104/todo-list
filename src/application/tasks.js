export function createtask(title,description,duedate,priority,notes,projectname,projectslist){
    let index=projectslist.findIndex(project=>project.name==projectname);
    let project=projectslist[index];
    project.todos.push({
        title,description,duedate,priority,notes,completed:false
    });
}
export function markascomplete(task){
    task.completed=true;
}
export function changepriority(task,newpriority){
    task.priority=newpriority;
}
export function removetarget(projectslist,taskname,projectname){
    let index1=projectslist.findIndex(project=>project.name==projectname);
    let project=projectslist[index1];
    let index=project.todos.findIndex(task=>task.name==taskname);
    project.todos.splice(index,1);
}

