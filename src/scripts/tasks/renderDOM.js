import buildDOM from "./buildDOM.js";


export const renderTaskCard = (tasks) => {
  const tasksContent = document.querySelector("#tasks-content")
  tasksContent.innerHTML = ""

  let taskHTML = ""
  for(let i = 0; i < 2; i++) {
    taskHTML += buildDOM.buildTask(tasks[i]);
  }

  tasksContent.innerHTML = taskHTML
};

export const renderTaskMain = (tasks) => {
  const mainContent = document.querySelector("#main-content")
  mainContent.innerHTML = "";

  let mainHTML = ""

  tasks.forEach(task => {
    mainHTML += buildDOM.buildTask(task);
  })

  mainContent.innerHTML = mainHTML
};
