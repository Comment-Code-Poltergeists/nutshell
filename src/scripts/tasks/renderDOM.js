import buildDOM from "./buildDOM.js";
import API from "../data/data.js"

export const renderTaskCard = () => {
  const tasks = JSON.parse(sessionStorage.getItem("tasks"))
  const tasksContent = document.querySelector("#tasks-content");
  tasksContent.innerHTML = "";
  tasks.forEach(task => {
    if (task.isComplete === false) {
      tasksContent.appendChild(buildDOM.buildTaskCard(task));
    }
  });
};

export const renderTaskMain = () => {
  const tasks = JSON.parse(sessionStorage.getItem("tasks"))
  const mainContent = document.querySelector("#main-container");
  mainContent.innerHTML = "<h1>All Tasks</h1>";

  const taskMain = document.createElement("article");
  taskMain.id = "task-main";

  tasks.forEach(task => {
    if (task.isComplete === false) {
      taskMain.appendChild(buildDOM.buildTaskMain(task));
    }
  });

  mainContent.appendChild(taskMain);
};

export const renderTaskForm = (taskId) => {
  if( taskId !== undefined ) {
    const taskCardToEdit = document.querySelector(`#main-task--${taskId}`)
    API.buildYourOwnGet(`tasks/${taskId}`).then(task => {
      taskCardToEdit.innerHTML = buildDOM.buildTaskForm(task)
    })
  } else {

  }
}