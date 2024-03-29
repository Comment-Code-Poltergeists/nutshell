import buildDOM from "./buildDOM.js";
import API from "../data/data.js";
import { sortElementsByDate } from "../utilities/datetime.js";

export const renderTaskCard = () => {
  const tasks = JSON.parse(sessionStorage.getItem("tasks"));
  const tasksContent = document.querySelector("#tasks-content");
  const sortedTasks = sortElementsByDate(tasks, "expectedCompletionDate");
  tasksContent.innerHTML = "";
  sortedTasks.forEach(task => {
    if (task.isComplete === false) {
      tasksContent.appendChild(buildDOM.buildTaskCard(task));
    }
  });
};

export const renderTaskMain = () => {
  const actionButton = document.querySelector("#mainButton");
  actionButton.textContent = "New Task";
  
  const tasks = JSON.parse(sessionStorage.getItem("tasks"));
  const mainContent = document.querySelector("#main-container");
  const sortedTasks = sortElementsByDate(tasks, "expectedCompletionDate");

  mainContent.innerHTML = "<h1>All Tasks</h1>";

  const taskMain = document.createElement("article");
  taskMain.id = "task-main";

  sortedTasks.forEach(task => {
    if (task.isComplete === false) {
      taskMain.appendChild(buildDOM.buildTaskMain(task));
    }
  });

  mainContent.appendChild(taskMain);
};

export const renderEditTaskForm = taskId => {
  if (taskId !== undefined) {
    const taskCardToEdit = document.querySelector(`#main-task--${taskId}`);
    API.buildYourOwnGet(`tasks/${taskId}`).then(task => {
      taskCardToEdit.innerHTML = buildDOM.buildEditTaskForm(task);
    });
  }
};

export const renderNewTaskForm = () => {
  const modalTitle = document.querySelector("#nutshell-modal-title");
  const modalBody = document.querySelector("#nutshell-modal-body");
  const modalFooter = document.querySelector("#nutshell-modal-footer");

  modalTitle.textContent = "Add new task";
  modalBody.innerHTML = buildDOM.buildNewTaskForm();
  modalFooter.innerHTML = buildDOM.buildTaskFormButtons();
};
