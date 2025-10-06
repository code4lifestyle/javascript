const todoInput = document.getElementById('todo-input')
const addTaskButton = document.getElementById('add-task-btn')
const todoList = document.getElementById('todo-list')


let tasks = []

addTaskButton.addEventListener('click', () => {
   const taskText =  todoInput.value.trim()
   if(taskText === "") return;

  //  taking input data create object for that
   const newTask = {
    id : Date.now(),
    text : taskText,
    completed : false
   }
  //  pushing newTask to array task
const result = tasks.push(newTask)
 todoInput.value = ""
   console.log("new task is : ", newTask)
})