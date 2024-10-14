const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const clearCompletedBtn = document.getElementById('clear-completed-btn');
addTaskBtn.addEventListener('click', addTask);

clearCompletedBtn.addEventListener('click', clearCompletedTasks);
function addTask() {
    const task = taskInput.value.trim();
    if (task === '') {
        alert('Please enter a task');
        return;
    }

    const taskElement = document.createElement('li');
    taskElement.classList.add('task');
    taskElement.innerHTML = `
    <input type="checkbox" class="task-checkbox">
    <span>${task}</span>
    <button class="remove-btn">Remove</button>`;
taskList.appendChild(taskElement);
taskInput.value = '';
const taskCheckbox = taskElement.querySelector('.task-checkbox');
taskCheckbox.addEventListener('change', () => {
    if (taskCheckbox.checked) {
        taskElement.classList.add('completed');
    } else {
        taskElement.classList.remove('completed');
    }
});
const removeBtn = taskElement.querySelector('.remove-btn');
removeBtn.addEventListener('click', () => {
    taskElement.remove();
});
}
function clearCompletedTasks() {
const completedTasks = taskList.querySelectorAll('.completed');
completedTasks.forEach((task) => {
    task.remove();
});
}
