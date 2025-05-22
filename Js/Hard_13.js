"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function () {
        let taskText = taskInput.value.trim();

        if (taskText === "") {
            Swal.fire({
                title: "Warning",
                text: "Please enter a task.",
                icon: "warning",
                confirmButtonText: "OK"
            });
            return;
        }

        let li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        let span = document.createElement("span");
        span.textContent = taskText;

        let deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger btn-sm";
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function () {
            taskList.removeChild(li);
            console.log(`Task deleted: "${taskText}"`);
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        console.log(`Task added: "${taskText}"`);
        taskInput.value = "";
    });
});
