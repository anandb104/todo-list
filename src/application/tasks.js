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

