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

        // Create li
        const li = document.createElement('li');

        // ✅ Create a span to hold just the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Set onclick to remove li
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append text and button to li
        li.appendChild(taskSpan);
        li.appendChild(removeBtn);

        // Append li to task list
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
    }

    // Add button listener
    addButton.addEventListener('click', addTask);

    // Add Enter key listener
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optional if required
    addTask();
});
