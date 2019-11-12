export default {
  buildTaskCard: function(taskEntry) {
    if (taskEntry.isComplete === false) {
      const taskSection = document.createElement("section")
      taskSection.id = `card-task--${taskEntry.id}`
      taskSection.classList = `card`

      taskSection.innerHTML = `
        <h6>${taskEntry.task}</h6>
        <div>${taskEntry.expectedCompletionDate}</div>
      `;

      return taskSection
    }
  },
  buildTaskMain: function(taskEntry) {
    if (taskEntry.isComplete === false) {
      const mainSection = document.createElement("section")
      mainSection.id = `card-task--${taskEntry.id}`
      mainSection.classList = `card`
      
      mainSection.innerHTML = `
        <span class="task-buttons">
          <button type="button" id="edit-task--${taskEntry.id}" class="btn btn-sm btn-warning">✎</button>
          <button type="button" id="delete-task--${taskEntry.id}" class="btn btn-sm btn-danger">X</button>
        </span>
        <h6>${taskEntry.task}</h6>
        <div>${taskEntry.expectedCompletionDate}</div>
        <div class="">
          <input type="checkbox" name="complete" value="complete" class="form-check-input">
          <label for="complete" class="form-check-label">Mark as Complete</label>
        </div>
      `;

      return mainSection
    }
  }
};
