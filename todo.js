const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");

let totalTasks = 0;

function updateCounter() {
  taskCounter.textContent = `Всего задач: ${totalTasks}`;
}

function createTaskItem(text) {
  const taskItem = document.createElement("li");
  const taskText = document.createElement("span");
  const buttonsDiv = document.createElement("div");
  const completeBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  taskItem.className = "task-item";
  taskText.className = "task-text";
  buttonsDiv.className = "task-buttons";
  completeBtn.className = "complete-btn";
  deleteBtn.className = "delete-btn";
  taskText.textContent = text;
  completeBtn.textContent = "Выполнено";
  deleteBtn.textContent = "Удалить";
  buttonsDiv.appendChild(completeBtn);
  buttonsDiv.appendChild(deleteBtn);
  taskItem.appendChild(taskText);
  taskItem.appendChild(buttonsDiv);

  completeBtn.addEventListener("click", function () {
    taskText.classList.toggle("completed");
    completeBtn.textContent = taskText.classList.contains("completed") ? "Возобновить" : "Выполнено";
  });
  deleteBtn.addEventListener("click", function () {
    taskItem.remove();
    totalTasks--;
    updateCounter();
  });

  return taskItem;
}
function addNewTask() {
  const text = taskInput.value.trim();
  if (text === "") {
    alert("Пожалуйста, введите текст задачи");
    return;
  }
  const newTask = createTaskItem(text);
  taskList.appendChild(newTask);
  totalTasks++;
  updateCounter();
  taskInput.value = "";
  taskInput.focus();
}
addBtn.addEventListener("click", addNewTask);

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addNewTask();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const sampleTasks = ["Изучить JavaScript", "Создать TODO-лист", "Поработать над проектом"];
  sampleTasks.forEach(function (task) {
    const newTask = createTaskItem(task);
    taskList.appendChild(newTask);
    totalTasks++;
  });
  updateCounter();
});
