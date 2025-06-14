document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create <li> and set its textContent
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Assign onclick event to remove li
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button to li
        li.appendChild(removeBtn);

        // Append the li to task list
        taskList.appendChild(li);

        // Clear the task input field
        taskInput.value = "";
    }

    // Click event on Add Task button
    addButton.addEventListener('click', addTask);

    // Enter key event
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
