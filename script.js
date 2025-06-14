document.addEventListener('DOMContentLoaded', function () {
    // Select required elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define addTask function
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create <li> and set its text content
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Set onclick event for removing the task
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button to li and li to the list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Add event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener to allow Enter key to trigger addTask
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
