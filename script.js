document.addEventListener("DOMContentLoaded", function () {
    // Query the submit button and input field
    let submit = document.querySelector("#submit");
    let newTask = document.querySelector("#task");
    let taskList = document.querySelector("#tasks");

    // Disable the submit button by default
    submit.disabled = true;

    // Listen for input in the task field
    newTask.addEventListener("input", function () {
        submit.disabled = newTask.value.trim() === "";
    });

    // Listen for submission of the form
    document.querySelector("#task-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get the task user just submitted
        let taskText = newTask.value.trim();
        if (taskText === "") return;

        // Create a new list item and add the task to it
        let li = document.createElement("li");
        li.textContent = taskText;

        // Add the new element to the unordered list
        taskList.appendChild(li);

        // Clear input field and disable submit button again
        newTask.value = "";
        submit.disabled = true;
    });
});