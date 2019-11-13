import { renderTaskCard, renderTaskMain } from "./renderDOM.js";
import API from "../data/data.js";
const userId = JSON.parse(sessionStorage.getItem("userId"));

const renderMainWithListener = () => {
  renderTaskMain(JSON.parse(sessionStorage.getItem("tasks")));
  isCompleteTaskListener();
};

export const isCompleteTaskListener = () => {
  const taskMainContainer = document.querySelector("#task-main");

  taskMainContainer.addEventListener("click", () => {
    const taskAction = event.target.id.split("--")[0];
    const taskId = event.target.id.split("--")[1];

    if (taskAction === "complete-task") {
      const body = { isComplete: true };
      API.patchSomething(`tasks/${taskId}`, body).then(() => {
        API.buildYourOwnGet(`tasks/?userId=${userId}`)
          .then(response => {
            sessionStorage.setItem("tasks", JSON.stringify(response));
          })
          .then(() => {
            renderTaskCard(JSON.parse(sessionStorage.getItem("tasks")));
            renderMainWithListener();
          });
      });
    } else if (taskAction === "delete-task") {
      API.deleteSomething(`tasks/${taskId}`).then(() => {
        API.buildYourOwnGet(`tasks/?userId=${userId}`)
          .then(response => {
            sessionStorage.setItem("tasks", JSON.stringify(response));
          })
          .then(() => {
            renderTaskCard(JSON.parse(sessionStorage.getItem("tasks")));
            renderMainWithListener();
          });
      });
    }
  });
};

export const clickTaskCardListener = () => {
  const taskCardContainer = document.querySelector("#tasks-container");

  taskCardContainer.addEventListener("click", renderMainWithListener);
};
