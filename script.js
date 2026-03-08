let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(){

const list = document.getElementById("taskList");
list.innerHTML="";

tasks.forEach((task,index)=>{

const li=document.createElement("li");

if(task.completed){
li.classList.add("completed");
}

li.innerHTML=`

<div>
<input type="checkbox" class="check"
${task.completed ? "checked" : ""}
onclick="toggleTask(${index})">

<span>${task.text}</span>
</div>

<div class="task-actions">
<button class="delete-btn" onclick="deleteTask(${index})">❌</button>
</div>

`;

list.appendChild(li);

});

}

function addTask(){

const input=document.getElementById("taskInput");
const text=input.value.trim();

if(text==="") return;

tasks.push({
text:text,
completed:false
});

input.value="";

saveTasks();
renderTasks();
}

function toggleTask(index){
tasks[index].completed=!tasks[index].completed;
saveTasks();
renderTasks();
}

function deleteTask(index){
tasks.splice(index,1);
saveTasks();
renderTasks();
}

renderTasks();