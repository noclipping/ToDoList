import { todoObject, projectsObject, newProjectId, projectsDictionary} from './todoObjects'

let  storedLibrary = JSON.parse(localStorage.getItem("savedDict"))


let currentNewId = 1;

let todoListItemAdd = (object ,projID ,arrayID ,theArray) => {

    // create item DOM elements
    let todoListItem = document.createElement("div");
    let todoListContainer = document.querySelector("#todoList");

    todoListItem.textContent=`${object.title}
    ${object.desc}
    ${object.date}`;

    todoListItem.classList.add("ass");
    if(object.prio==="high"){
        todoListItem.style.backgroundColor="red";
    } else if(object.prio==="med"){
        todoListItem.style.backgroundColor="yellow";
    }else if(object.prio==="low"){
        todoListItem.style.backgroundColor="green";
    }
    let delButton = document.createElement("button")
    todoListItem.appendChild(delButton)
    delButton.textContent="x"
    todoListItem.addEventListener('click', e=>{
        console.log(arrayID)
    })
    delButton.addEventListener('click', e=>{
        delButton.parentElement.remove();
        console.log(arrayID)
        console.log("FIX THIS: "+theArray)
        projectsDictionary[projID].todoArray.splice(arrayID,1)
        localStorage.setItem('savedDict', JSON.stringify(projectsDictionary));
    })
    todoListContainer.appendChild(todoListItem);
    
}


// NAVBAR CODE v v v v 

let projectList = document.createElement("ul");
projectList.classList.add("projectList");
let navbarContainer = document.querySelector("#navbar")
navbarContainer.appendChild(projectList);

// NAVBAR CODE ^ ^ ^ ^

let addItemForm = () => {
    if(!document.querySelector(".active")){alert("you must select a project first!")}
    let currentProject = document.querySelector(".active")
    let currentProjectId = currentProject.getAttribute('projdata-index')
    let formDiv = document.createElement("div");
    console.log("currentProj ID: ",currentProjectId)
    formDiv.classList.add("addItem")
    formDiv.innerHTML=
    `
    <form>
        
        <label for="title">Title:</label><br>
        <input  id="newFormTitle" value="task name"><br>
        
        <label for="desc">Desc:</label><br>
        <input  id="newFormDesc"  value="description"><br>
        
        <label for="newFormDate">DueDate:</label><br>
        <input  id="newFormDate" value="12/12/1980"><br><br>
        
        <input type="radio" id="newFormHigh" name="prio">
        <label>High</label><br>
        <input type="radio" id="newFormMedium" name="prio">
        <label>Medium</label><br>
        <input type="radio" id="newFormLow" name="prio">
        <label>Low</label>
        
    </form> 
    <button id='addItemConfirm'>Confirm</button> 
    <button id='addItemCancel'> Cancel </button>
    `
    document.body.append(formDiv)
    
    let highRadio = document.querySelector("#newFormHigh");
    let mediumRadio = document.querySelector("#newFormMedium");
    let lowRadio = document.querySelector("#newFormLow");

    let confirmButton = document.querySelector('#addItemConfirm')
    let cancelButton = document.querySelector('#addItemCancel')
    let priority = "low";
    cancelButton.addEventListener('click',e=>{formDiv.remove()})
    confirmButton.addEventListener('click', e=>{

    let title = document.querySelector('#newFormTitle').value
    let desc = document.querySelector('#newFormDesc').value
    let date = document.querySelector('#newFormDate').value
        
        if(highRadio.checked){
            priority="high";
        }else if(mediumRadio.checked){
            priority="med";
        } else if(lowRadio.checked){
            priority="low";
        }

         let newToDoObject = todoObject(title, desc, date, priority, Number(currentNewId), false);
        
         //currentNewId+=1; // increment new ID

         formDiv.remove(); // removes the popup form
         
         
         //todoListItemAdd(newToDoObject,currentProjectId); // ADD ITEM TO DOM
         
        console.log("moments b4 array: ", projectsDictionary[currentProjectId])
         projectsDictionary[currentProjectId].todoArray.push(newToDoObject)
         // add new todoObject to current active array
         let itemArrayId = projectsDictionary[currentProjectId].todoArray.findIndex(e=> e.title === title)
         console.log("proj id"+currentProjectId)
         let theArray = "penis"
         todoListItemAdd(newToDoObject,currentProjectId, itemArrayId, theArray);
         // v v THIS IS THE WRONG SPOT, MUST ADD NEW PROJ FOR IT TO WORK RN :/ 

         localStorage.setItem('savedDict', JSON.stringify(projectsDictionary));

         return(newToDoObject) // return object(no clue why rn?)
         
    
    })

}


let addItemButton = document.querySelector("#addItemButton")
addItemButton.addEventListener('click', e=>{
    addItemForm();
})



let addProjectToList = (project, isNew, key) => {
    
    console.log("addProjectToList")
    let newProjectListing = document.createElement("li");
    newProjectListing.textContent=project.projectName;
    newProjectListing.classList.add("projectListItems");
    let delKey = 0;
    if(isNew){
            newProjectListing.setAttribute("projdata-index", newProjectId)
            delKey=newProjectId
        }else{
            newProjectListing.setAttribute("projdata-index", key)
            delKey=key;
        }
        
        let thisProjId = Number(newProjectId);

    if(isNew){
        projectsDictionary[Number(newProjectId)] = project
        
    }
    newProjectListing.addEventListener("mouseenter", e=>{
        deleteButton.textContent="X"
        deleteButton.style.display="inline"
        
    })
    newProjectListing.addEventListener("mouseleave", e=>{
        
        deleteButton.style.display="none"
    })
    newProjectId = Number(newProjectId)+1;


    localStorage.setItem('currentProjId', newProjectId)

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("projDelButton")
    newProjectListing.appendChild(deleteButton)
    deleteButton.style.display="none"
    deleteButton.addEventListener('click', e=>{
        //let epicGamer = document.querySelector(".active")
        //epicGamer.classList.remove(".active")
        delete projectsDictionary[delKey];
        newProjectListing.remove();
        localStorage.setItem('savedDict', JSON.stringify(projectsDictionary)); 
        
    })
    
    
    localStorage.setItem('savedDict', JSON.stringify(projectsDictionary)); 

    projectList.appendChild(newProjectListing)
    newProjectListing.addEventListener('click', e=>{
        let oldActive = document.querySelector('.active')
        document.querySelectorAll(".ass").forEach(e => e.remove())
        if(oldActive){oldActive.classList.remove("active")}
        newProjectListing.classList.add("active")
        let array = project.todoArray;
        array.forEach(item =>{
            let itemID = array.findIndex(elem=>elem.title===item.title)
            todoListItemAdd(item,project.projectId,itemID)})
    })
    

}

let addProjectForm = () =>{
    let formDiv = document.createElement("div");
    formDiv.classList.add("addItem")
    formDiv.innerHTML=
    `
    <form>
        
        <label for="title">Title:</label><br>
        <input  id="newFormTitle" value="task name"><br>
        
        
    </form> 
    <button id='addItemConfirm'>Confirm</button> 
    <button id='addItemCancel'> Cancel </button>`
    document.body.append(formDiv);

    let confirmButton = document.querySelector('#addItemConfirm')
    let cancelButton = document.querySelector('#addItemCancel')

    cancelButton.addEventListener('click',e=>{formDiv.remove()})
    confirmButton.addEventListener('click', e=>{

        let title = document.querySelector('#newFormTitle').value
        let newProj = projectsObject(title,newProjectId)
        addProjectToList(newProj, true);
        localStorage.setItem('savedDict', JSON.stringify(projectsDictionary)); 
        formDiv.remove();
    })
}


let addProjectButton = document.querySelector('.addProjectButton')

addProjectButton.addEventListener('click', e=>{
    console.log("add proj click")
    console.log("onclick ID: ", newProjectId)
    addProjectForm()
})

if(storedLibrary){
    let largestKey = 1;
    console.log(storedLibrary)
    projectsDictionary = storedLibrary;
    Object.entries(projectsDictionary).forEach(([key, val]) => {
        
        if(largestKey<key){
            largestKey=key;
        }
        console.log(key); // the name of the current key.
        console.log(val); // the value of the current key.
        addProjectToList(val, false, key);
        
      });
      console.log("largestkey = ",largestKey);
      console.log("XXXXXXXXXXXXXXXXXXXXXXX")
      //newProjectId = localStorage.getItem('currentProjId')
      newProjectId = Number(largestKey)+1;
      console.log("savedProjId: " + newProjectId + ' type: ' +typeof(newProjectId))
}

















export { addItemForm, currentNewId, todoObject, projectsObject,  addProjectToList}