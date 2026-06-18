function tasks(title,description,duedate,priority,notes,checklist){
    return{title,
            description,
            duedate,
            priority,
            notes,
            checklist,
    }
}
function project(name){
    const todos=[];
    return{name,todos};
}
let defaultname=project("exercise");
defaultname.todos.push(tasks("running","running for 5 mins","today","Medium","Important for health",[]));
projects=[defaultname];
console.log(projects);

