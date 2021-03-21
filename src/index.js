import { addItemForm, currentNewId, addProjectToList} from './DOMrender.js'
import { newProjectId, todoObject, projectsDictionary } from './todoObjects'


document.addEventListener('click', e=>{
    console.log(projectsDictionary)
})



// you can directly modify created obj variables. 

// other .js files' global variables cannot be accessed
//in any other file's global scope