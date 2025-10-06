document.addEventListener('DOMContentLoaded', () => {

const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let tasks =  JSON.parse(localStorage.getItem('tasks')) || [];
tasks.forEach(task => renderTask(task))

addTaskButton.addEventListener("click", () => {
  const taskText = todoInput.value.trim();
  if (taskText === "") return;

  //  taking input data create object for that
  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };

  //  pushing newTask to array task
  tasks.push(newTask);
     saveTask();
  todoInput.value = "";
  console.log("new task is : ", newTask);
});

  function renderTask(task){
    console.log(task.text)
  }

function saveTask() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

});