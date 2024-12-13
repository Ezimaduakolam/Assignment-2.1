const maxItems = 10; // Maximum number of tasks allowed
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const errorMessage = document.getElementById('errorMessage');

addTaskButton.addEventListener('click', () => {
    // Check if the task list already has the maximum number of items
    if (taskList.children.length >= maxItems) {
        errorMessage.textContent = `Task limit reached! You can only add up to ${maxItems} tasks.`;
        return;
    }

    const taskValue = taskInput.value.trim();
    if (taskValue === '') {
        errorMessage.textContent = 'Task cannot be empty!';
        return;
    }

    // Add the task to the list
    const newTask = document.createElement('li');
      newTask.className = 'todoItem';
      newTask.innerHTML = `
        <span>${taskValue}</span>
        <button class="delete-button">x</button>
      `;
        taskList.appendChild(newTask);

    // Add event listener to the delete button
    const deleteButton = newTask.querySelector('.delete-button');
    deleteButton.addEventListener('click', function() {
    taskList.removeChild(newTask); // Remove the task
    });
    
    // Clear the input and error message
    taskInput.value = '';
    errorMessage.textContent = '';
});
      
