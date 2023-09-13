const taskForm = document.getElementById('new-task')

taskForm.addEventListener('submit',function(e){
e.preventDefault()

console.log('ciao')

const myTask = document.getElementById('input')
const newTask = myTask.value

const newTaskCard = document.createElement('div')
newTaskCard.classList.add('task-card')
newTaskCard.innerHTML = `<p>${newTask}</p><button onclick=deleteTask(event)>ELIMINA</i></button>`
const sectionForTasks = document.getElementById('tasks-container')
sectionForTasks.appendChild(newTaskCard)

myTask.value=''

})


const deleteTask = function (e){
    const deleteButton = e.target
    deleteButton.parentElement.remove()
}
