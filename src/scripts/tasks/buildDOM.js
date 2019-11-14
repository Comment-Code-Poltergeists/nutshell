export default {
  buildTaskCard: function(taskEntry) {
    const taskSection = document.createElement("section")
    taskSection.id = `card-task--${taskEntry.id}`
    taskSection.classList = "card bg-secondary border-dark"

    taskSection.innerHTML = `
      <div class="card-body">
        <h6 class="card-title">${taskEntry.task}</h6>
        <div class="card-text">${taskEntry.expectedCompletionDate}</div>
      </div>
    `;

    return taskSection
  },
  buildTaskMain: function(taskEntry) {
    const mainSection = document.createElement("section")
    mainSection.id = `main-task--${taskEntry.id}`
    mainSection.classList = "card bg-secondary border-dark"
    
    mainSection.innerHTML = `
      <div class="card-body">
        <span class="task-buttons">
          <button type="button" id="edit-task--${taskEntry.id}" class="btn btn-sm btn-warning">✎</button>
          <button type="button" id="delete-task--${taskEntry.id}" class="btn btn-sm btn-danger">X</button>
        </span>
        <h6 class="card-title">${taskEntry.task}</h6>
        <div class="card-text">${taskEntry.expectedCompletionDate}</div>
        <div class="">
          <input id="complete-task--${taskEntry.id}" type="checkbox" name="complete" value="complete" class="form-check-input">
          <label for="complete" class="form-check-label">Mark as Complete</label>
        </div>
      </div>
    `;

    return mainSection

  },

  buildEditTaskForm: function(task) {

    if(task !== undefined) {
      // const taskMainReference = document.querySelector(`#main-task--${task.id}`)
      // populate form with details
      const editTaskMainHTML = `
      <div class="card-body">
      <span class="task-buttons">
        <button type="button" id="save-task--${task.id}" class="btn btn-sm btn-primary">&#128190;</button>
        <button type="button" id="cancel-task--${task.id}" class="btn btn-sm btn-light">Cancel</button>
      </span>
      <input id="task-name--${task.id}" type="text" class="form-control" value="${task.task}">
      <input id="task-date--${task.id}" type="date" class="form-control" value="${task.expectedCompletionDate}">
    </div>
    `

    return editTaskMainHTML;

    }
  },

  buildNewTaskForm: function() {
      const newTaskForm = `
      <div class="card-body">
        <label for="task-name--new">Task name:</label>
        <input id="task-name--new" type="text" class="form-control" value="">
        <label for="task-date--new">To be completed by:</label>
        <input id="task-date--new" type="date" class="form-control" value="">
      </div>
      `

    return newTaskForm
  },

  buildTaskFormButtons: function() {
    return `
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    <button type="button" id="new-task-save" class="btn btn-primary">Save changes</button>`
  }
};
