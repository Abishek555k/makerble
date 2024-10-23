const tasks = [
    { text: "follow up call needed", done: false },
    { text: "contact the local authority", done: false },
    { text: "Book in another meeting", done: false },
    { text: "Speak to the GP about XYZ", done: false },
    { text: "you need to call her about ...", done: false },
    { text: "Submission deadline", done: false }
];

// Function to render the task list
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = task-{index};
        checkbox.checked = task.done;
        
        const label = document.createElement('label');
        label.setAttribute('for', task-{index});
        label.innerHTML = task.text;
        
        taskItem.appendChild(checkbox);
        taskItem.appendChild(label);
        
        checkbox.addEventListener('change', () => {
            task.done = checkbox.checked;
            renderTasks(); // Re-render the task list to reflect changes
        });
        
        taskList.appendChild(taskItem);
    });
}

// Function to add a new task
function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const newTaskText = newTaskInput.value.trim();
    
    if (newTaskText) {
        tasks.push({ text: newTaskText, done: false });
        newTaskInput.value = ''; // Clear the input field
        renderTasks(); // Re-render the task list
    }
}

// Initial render of the task list
renderTasks();