export default {
  buildTask: function(taskEntry) {
    if (taskEntry.isComplete === false) {
      const taskHTML = `
        <h6>${taskEntry.task}</h6>
        <div>${taskEntry.expectedCompletionDate}</div>
        <input type="checkbox" name="Complete">
      `;

      return taskHTML
    }
  }
};
