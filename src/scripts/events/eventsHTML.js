let SideEventCounter = 0
let mainEventCounter = 0
const eventId = 0

export default {

  eventsSideContainerHtmlMaker(event) {
    if (SideEventCounter === 0) { // the next upcoming event based on the sorted array
      SideEventCounter++
      return `
     <div class="card bg-secondary border-dark">
     <div class="card-body">
     <h6 class="card-title"><b> ${event.eventName} </b></h6>
     <div class="card-text">
      <b> ${event.eventDate}</b>
      <b> ${event.location} </b>
     </div>
     </div>
     </div>`
    } else { // not bolded entries for all the other events
      SideEventCounter++
      return `
      <div class="card bg-secondary border-dark"> 
      <div class="card-body">
      <h6 class="card-title"> ${event.eventName} </h6>
      <div class="card-text">
       ${event.eventDate}
       ${event.location}
     </div>
     </div>
     </div>`
    }

  },
  eventsMainContainerHtmlMaker(event) {
    if (mainEventCounter === 0) { // the next upcoming event based on the sorted array
      mainEventCounter++
      return `
     <div class="card bg-secondary border-dark">
     <div class="card-body">
     <h6 class="card-title"><b> ${event.eventName} </b></h6>
     <div class="card-text">
      <b> ${event.eventDate}</b>
      <b> ${event.location} </b>
     </div>
     <button type="button" id="delete-task--${eventId}" class="btn btn-sm btn-danger">X</button>
     <button type="button" id="edit-task--${eventId}" class="btn btn-sm btn-warning">✎</button>
     </div>
     </div>`
    } else { // not bolded entries for all the other events
      mainEventCounter++
      return `
      <div class="card bg-secondary border-dark"> 
      <div class="card-body">
      <h6 class="card-title"> ${event.eventName} </h6>
      <div class="card-text">
       ${event.eventDate}
       ${event.location}
     </div>
     <button type="button" id="delete-task--${eventId}" class="btn btn-sm btn-danger">X</button>
     <button type="button" id="edit-task--${eventId}" class="btn btn-sm btn-warning">✎</button>
     </div>
     </div>`
    }

  }
}