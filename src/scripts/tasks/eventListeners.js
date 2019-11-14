import {
  renderTaskCard,
  renderTaskMain,
  renderEditTaskForm,
  renderNewTaskForm
} from "./renderDOM.js";
import API from "../data/data.js";
const user = sessionStorage.getItem("userId");

const saveNewTaskListener = () => {
  const saveNewTaskButton = document.querySelector("#new-task-save");
  saveNewTaskButton.addEventListener("click", () => {
    // POST
    const newTaskName = document.querySelector("#task-name--new").value;
    const newTaskDate = document.querySelector("#task-date--new").value;

    if (newTaskName && newTaskDate) {
      const newTask = {
        userId: user,
        task: newTaskName,
        expectedCompletionDate: newTaskDate,
        isComplete: false
      };

      API.createSomething("tasks", newTask).then(() => {
        cacheAndRenderTasks();
      });
    }
  });
};

const cacheAndRenderTasks = () => {
  const userId = JSON.parse(sessionStorage.getItem("userId"));

  API.buildYourOwnGet(`tasks/?userId=${userId}`)
    .then(response => {
      sessionStorage.setItem("tasks", JSON.stringify(response));
    })
    .then(() => {
      renderTaskCard();
      renderMainWithListener();
    });
};

const renderMainWithListener = () => {
  renderTaskMain();
  taskMainEventListener();
  // populate blank task form in modal
  renderNewTaskForm();
  saveNewTaskListener();
};

export const taskMainEventListener = () => {
  const taskMainContainer = document.querySelector("#task-main");

  taskMainContainer.addEventListener("click", () => {
    const taskAction = event.target.id.split("--")[0];
    const taskId = event.target.id.split("--")[1];

    if (taskAction === "complete-task") {
      const body = { isComplete: true };
      API.patchSomething(`tasks/${taskId}`, body).then(cacheAndRenderTasks);
    } else if (taskAction === "delete-task") {
      API.deleteSomething(`tasks/${taskId}`).then(cacheAndRenderTasks);
    } else if (taskAction === "edit-task") {
      renderEditTaskForm(taskId);
    } else if (taskAction === "save-task") {
      const editedTaskName = document.querySelector(`#task-name--${taskId}`)
        .value;
      const editedTaskDate = document.querySelector(`#task-date--${taskId}`)
        .value;
      const editedTask = {
        task: editedTaskName,
        expectedCompletionDate: editedTaskDate
      };
      API.patchSomething(`tasks/${taskId}`, editedTask).then(
        cacheAndRenderTasks
      );
    } else if (taskAction === "cancel-task") {
      cacheAndRenderTasks();
    }
  });
};

export const clickTaskCardListener = () => {
  const taskCardContainer = document.querySelector("#tasks-container");

  taskCardContainer.addEventListener("click", renderMainWithListener);
};
