document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn'); // Selects Add Task Button
    const taskInput = document.getElementById('task-input'); // Selects task input field
    const taskList = document.getElementById('task-list'); // Selects ul for tasks

    // Initialize and Load Tasks
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    // Add Task Function
    function addTask(taskText, save = true) {
        // Confirm if input is empty
        if (!taskText) {
            taskText = taskInput.value.trim();
        }

        if (taskText === "") {
            alert('Enter a task!');
            return;
        }
        
        const li = document.createElement('li'); // creates list item
        li.textContent = taskText; // sets text content

        // Create remove button and give it a class
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        
        // Listen for click to remove task when clicked
        removeButton.addEventListener('click', function () {
            li.remove();

            // 1. Filter out the clicked task
            tasks = tasks.filter(task => task !== taskText);

            // 3. Save updated list back to localStorage
            localStorage.setItem('tasks', JSON.stringify(tasks));
        });

        // Append remove button to li element
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Save task to local storage
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        // Resets input to empty string
        taskInput.value = '';    
    }

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // Add event listener to addButton
    addButton.addEventListener('click', function () {
        addTask();
    });
    
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    
    // Load saved tasks on startup
    loadTasks();
});