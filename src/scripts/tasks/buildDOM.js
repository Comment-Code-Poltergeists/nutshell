/*

<div id="tasks-container" class="card side-components">
<h3>To Do</h3>
  <article id="tasks-content" class="card-body"> Lorem Ipsumn</article>
</div>

{
    "id": 1,
    "userId": 1,
    "task": "task, id: 1, userId: 1",
    "expectedCompletionDate": "2019-04-17",
    "isComplete": false
},

*/
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
