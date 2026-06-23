export function createtask(title,description,duedate,priority,notes,projectid,projectslist){
    let index=projectslist.findIndex(project=>project.id==projectid);
    let project=projectslist[index];
     let id=crypto.randomUUID();
     let task={
        title,description,duedate,priority,notes,completed:false,id
    };
    project.todos.push(task);
    return task;
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
export function renametask(title,description,duedate,priority,notes,projectid,taskid,projectslist){
    let index1=projectslist.findIndex(project=>project.id==projectid);
    let project=projectslist[index1];
    let index=project.todos.findIndex(task=>task.id==taskid);
    project.todos[index].title=title;
    project.todos[index].description=description;
    project.todos[index].duedate=duedate;
    project.todos[index].priority=priority;
    project.todos[index].notes=notes;
}

