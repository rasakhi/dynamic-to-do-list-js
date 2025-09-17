document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn'); // Selects Add Task Button
    const taskInput = document.getElementById('task-input'); // Selects task input field
    const taskList = document.getElementById('task-list'); // Selects ul for tasks

    // Add Task Function
    function addTask() {
        const taskText = taskInput.value.trim();
        // Confirm if input is empty
        if (taskText === "") {
            alert('Enter a task!');
        }

        if (taskText !== "") {
            const li = document.createElement('li'); // creates list item
            li.textContent = taskText; // sets text content

            // Create remove button and give it a class
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');
            // Listen for click to remove task when clicked
            removeButton.addEventListener('click', function () {
                li.remove();
            });
            // Append remove button to li element
            li.appendChild(removeButton);
            taskList.appendChild(li);
            taskInput.value = '';
        }  
    }
    // Add event listener to addButton
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function () {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    document.addEventListener('DOMContentLoaded', addTask);
});