import buildDOM from "./buildDOM.js";

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
