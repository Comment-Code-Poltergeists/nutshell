import buildDOM from "./buildDOM.js";

export const renderTaskCard = tasks => {
  const tasksContent = document.querySelector("#tasks-content");
  tasksContent.innerHTML = "";
  tasks.forEach(task => {
    tasksContent.appendChild(buildDOM.buildTaskCard(task));
  });
};

export const renderTaskMain = tasks => {
  const mainContent = document.querySelector("#main-content");
  mainContent.innerHTML = ""
  tasks.forEach(task => {
    mainContent.appendChild(buildDOM.buildTaskMain(task));
  });
};
