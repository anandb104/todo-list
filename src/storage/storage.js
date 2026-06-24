export function saveprojects(projectslist){
    localStorage.setItem("projects",JSON.stringify(projectslist));
}

export function loadprojects(){
    const data=localStorage.getItem("projects");
    if(data==null){
        return [];
    }
    return JSON.parse(data);
}