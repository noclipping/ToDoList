(()=>{"use strict";let e=1,t={},o=JSON.parse(localStorage.getItem("savedDict")),n=e=>{let t=document.createElement("div"),o=document.querySelector("#todoList");t.textContent=`${e.title}\n    ${e.desc}\n    ${e.date}`,t.classList.add("ass"),"high"===e.prio?t.style.backgroundColor="red":"med"===e.prio?t.style.backgroundColor="yellow":"low"===e.prio&&(t.style.backgroundColor="green"),o.appendChild(t)},r=document.createElement("ul");r.classList.add("projectList"),document.querySelector("#navbar").appendChild(r),document.querySelector("#addItemButton").addEventListener("click",(e=>{(()=>{let e=document.querySelector(".active").getAttribute("projdata-index"),o=document.createElement("div");console.log("currentProj ID: ",e),o.classList.add("addItem"),o.innerHTML='\n    <form>\n        \n        <label for="title">Title:</label><br>\n        <input  id="newFormTitle" value="task name"><br>\n        \n        <label for="desc">Desc:</label><br>\n        <input  id="newFormDesc"  value="description"><br>\n        \n        <label for="newFormDate">DueDate:</label><br>\n        <input  id="newFormDate" value="12/12/1980"><br><br>\n        \n        <input type="radio" id="newFormHigh" name="prio">\n        <label>High</label><br>\n        <input type="radio" id="newFormMedium" name="prio">\n        <label>Medium</label><br>\n        <input type="radio" id="newFormLow" name="prio">\n        <label>Low</label>\n        \n    </form> \n    <button id=\'addItemConfirm\'>Confirm</button> \n    <button id=\'addItemCancel\'> Cancel </button>\n    ',document.body.append(o);let r=document.querySelector("#newFormHigh"),l=document.querySelector("#newFormMedium"),d=document.querySelector("#newFormLow"),c=document.querySelector("#addItemConfirm"),a=document.querySelector("#addItemCancel"),i="low";a.addEventListener("click",(e=>{o.remove()})),c.addEventListener("click",(c=>{let a=document.querySelector("#newFormTitle").value,m=document.querySelector("#newFormDesc").value,s=document.querySelector("#newFormDate").value;r.checked?i="high":l.checked?i="med":d.checked&&(i="low");let u={title:a,desc:m,date:s,prio:i,objId:Number(1),complete:!1};return o.remove(),n(u),console.log("moments b4 array: ",t[e]),t[e].todoArray.push(u),localStorage.setItem("savedDict",JSON.stringify(t)),u}))})()}));let l=(o,l,d)=>{console.log("addProjectToList");let c=document.createElement("li");c.textContent=o.projectName,c.classList.add("projectListItems"),l?c.setAttribute("projdata-index",e):c.setAttribute("projdata-index",d);let a=Number(e);l&&(t[Number(e)]=o),console.log("newProjId before: "+e),console.log(typeof e),e=Number(e)+1,console.log("newProjId after: "+e),console.log(typeof e),localStorage.setItem("currentProjId",e);let i=document.createElement("button");i.classList.add("projDelButton"),c.appendChild(i),i.textContent="X",i.addEventListener("click",(e=>{delete t[a],c.remove(),localStorage.setItem("savedDict",JSON.stringify(t))})),localStorage.setItem("savedDict",JSON.stringify(t)),r.appendChild(c),c.addEventListener("click",(e=>{let t=document.querySelector(".active");document.querySelectorAll(".ass").forEach((e=>e.remove())),t&&t.classList.remove("active"),c.classList.add("active"),o.todoArray.forEach((e=>{n(e)}))}))};if(document.querySelector(".addProjectButton").addEventListener("click",(o=>{console.log("add proj click"),console.log("onclick ID: ",e),(()=>{let o=document.createElement("div");o.classList.add("addItem"),o.innerHTML='\n    <form>\n        \n        <label for="title">Title:</label><br>\n        <input  id="newFormTitle" value="task name"><br>\n        \n        \n    </form> \n    <button id=\'addItemConfirm\'>Confirm</button> \n    <button id=\'addItemCancel\'> Cancel </button>',document.body.append(o);let n=document.querySelector("#addItemConfirm");document.querySelector("#addItemCancel").addEventListener("click",(e=>{o.remove()})),n.addEventListener("click",(n=>{let r=((e,t)=>{let o=e,n=Number(t),r=[];return{todoArray:r,addToArray:e=>{r.push(e)},showArray:()=>{console.log(r)},projectName:o,projectId:n}})(document.querySelector("#newFormTitle").value,e);l(r,!0),localStorage.setItem("savedDict",JSON.stringify(t)),o.remove()}))})()})),o){let n=1;console.log(o),t=o,Object.entries(t).forEach((([e,t])=>{n<e&&(n=e),console.log(e),console.log(t),l(t,!1,e)})),console.log("largestkey = ",n),console.log("XXXXXXXXXXXXXXXXXXXXXXX"),e=Number(n)+3,console.log("savedProjId: "+e+" type: "+typeof e)}document.addEventListener("click",(e=>{console.log(t)}))})();