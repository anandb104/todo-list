function tasks(title,description,duedate,priority,notes,checklist){
    return{title,
            description,
            duedate,
            priority,
            notes,
            checklist
    }
}
function project(name){
    todos:[];
    return{name,todos};
}