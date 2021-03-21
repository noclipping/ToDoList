let newProjectId = 1

let todoObject = (_title,_desc,_date,_prio,_objId,_complete) => {
    let title = _title;
    let desc = _desc;
    let date = _date;   
    let prio = _prio;
    let objId = _objId;
    let complete = _complete;

    return{title,desc,date,prio,objId,complete}
}


let projectsObject = (_name,_id) => {
    let projectName = _name
    let projectId = Number(_id)
    let todoArray = []

    let addToArray = (item) =>{
        todoArray.push(item);
    }
    let showArray = () =>{console.log(todoArray)}
    //newProjectId+=1;
    return {todoArray,addToArray,showArray,projectName,projectId}

}

let projectsDictionary = {}

export {todoObject, projectsObject, newProjectId, projectsDictionary}