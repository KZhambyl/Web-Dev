let display = document.getElementById('display');
let btn = document.getElementById('btn');
let todos = document.getElementById("todos");


btn.addEventListener('click', function () {
    let new_task = display.value;
    if (new_task) {
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task-item');

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox');

        let taskText = document.createElement('span');
        taskText.innerText = new_task;
        taskText.classList.add('task-text');

        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = "🗑";
        deleteBtn.classList.add('delete-btn');

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                taskText.classList.add('completed');
            } else {
                taskText.classList.remove('completed');
            }
        })

        deleteBtn.addEventListener('click', function () {
            taskDiv.remove();
        })

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(taskText);
        taskDiv.appendChild(deleteBtn);
        todos.appendChild(taskDiv);

        display.value = '';
    }
    else {
        alert('Please write task')
    }
})