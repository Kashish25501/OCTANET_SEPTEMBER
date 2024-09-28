const taskInput = document.querySelector(".task-input input"),
filters = document.querySelectorAll(".filters span"),
clearAll = document.querySelector(".clearBtn"),
taskBox = document.querySelector(".task-box");

let editId;
let isEditedTask = false;
let todos = JSON.parse(localStorage.getItem("todo-list"));

filters.forEach(btn => {
    btn.addEventListener("click", () => {
         document.querySelector("span.active").classList.remove("active");
         btn.classList.add("active");
         showTodo(btn.id);
    });
})
function showTodo(filter){
    let li = "";
    if(todos){
        todos.forEach((todo, id) => {
            let isCompleted = todo.status == "completed" ? "checked" : "";
            if(filter == todo.status || filter == "all"){
                li += `<li class="task">
                        <label for="${id}">
                            <input onclick = "updateStatus(this)" type="checkbox" id="${id}" ${isCompleted}>
                            <p class="${isCompleted}">${todo.name}</p>
                        </label>
                        <div class="settings">
                            <i onclick = "editTask(${id}, '${todo.name}')" class='bx bxs-edit'></i>
                            <i onclick = "deleteTask(${id})" class='bx bx-trash' ></i>
                        </div>
                    </li>`;
            }
        });
    }
    taskBox.innerHTML = li || `<span>Woohoo! There are no tasks at current.</span> `;
}
showTodo("all");

function editTask(taskId, taskName){
    editId = taskId;
    isEditedTask = true;
    taskInput.value = taskName;
}

function deleteTask(deleteId){
    todos.splice(deleteId, 1);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo("all");
}

clearAll.addEventListener("click", () => {
    todos.splice(0, todos.length);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo("all");
});
function updateStatus(selectedTask){
    let taskName = selectedTask.parentElement.lastElementChild;
    if(selectedTask.checked){
        taskName.classList.add("checked");
        todos[selectedTask.id].status = "completed";
    }
    else{
        taskName.classList.remove("checked");
        todos[selectedTask.id].status = "pending";
    }
    localStorage.setItem("todo-list", JSON.stringify(todos));
}

taskInput.addEventListener("keyup", e => {
    let userTask = taskInput.value.trim();
    if(e.key == "Enter" && userTask){
        if(!isEditedTask){
            if(!todos){
                todos = [];
            }    
            let taskInfo = {name: userTask, status: "pending"};
            todos.push(taskInfo);
        }else{
            isEditedTask = false;
            todos[editId].name = userTask;
        }

        taskInput.value = "";
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTodo("all");
    }
})