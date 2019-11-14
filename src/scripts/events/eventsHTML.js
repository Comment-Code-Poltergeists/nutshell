let SideEventCounter = 0
let mainEventCounter = 0
const userId = JSON.parse(sessionStorage.getItem("userId"))
export default {
//*************************************************************************
// Create a HTML content for the side container
//*************************************************************************
  eventsSideContainerHtmlMaker(event) {
    let cardClasses
    if (event.userId !== userId) {
      cardClasses = "card border-dark csbg"
    }
    else {
      cardClasses = "card bg-secondary border-dark"
    }
    if (SideEventCounter === 0) { // the next upcoming event based on the sorted array
      SideEventCounter++
      return `
     <div class="${cardClasses}">
     <div class="card-body">
     <h6 class="card-title"><b> ${event.eventName} </b></h6>
     <div class="card-text">
      <b> ${event.eventDate}</b>
      <b> ${event.location} </b>
     </div>
     </div>
     </div>
     <br>
     `
    } else { // not bolded entries for all the other events
      SideEventCounter++
      return `
      <div class="${cardClasses}"> 
      <div class="card-body">
      <h6 class="card-title"> ${event.eventName} </h6>
      <div class="card-text">
       ${event.eventDate}
       ${event.location}
     </div>
     </div>
     </div>
     <br>
     `
    }
  },
//*************************************************************************
// Create a HTML content for the MAIN container - DISPLAY
//*************************************************************************
  eventsMainContainerHtmlMaker(event) {
    let cardClasses
    if (event.userId !== userId) {
      cardClasses = "card border-dark csbg"
    } else {
      cardClasses = "card bg-secondary border-dark"
    }
    if (mainEventCounter === 0) { // the next upcoming event based on the sorted array
      mainEventCounter++
      return `
     <div class="${cardClasses}" id="event-container--${event.id}">
     <div class="card-body">
     <h6 class="card-title"><b> ${event.eventName} </b></h6>
     <div class="card-text">
      <b> ${event.eventDate}</b>
      <b> ${event.location} </b>
     </div>
     <button type="button" id="delete-event--${event.id}" class="btn btn-sm btn-danger">X</button>
     <button type="button" id="edit-event--${event.id}" class="btn btn-sm btn-warning">✎</button>
     </div>
     </div>`
    } else { // not bolded entries for all the other events
      mainEventCounter++
      return `
      <div class="${cardClasses}" id="event-container--${event.id}"> 
      <div class="card-body">
      <h6 class="card-title"> ${event.eventName} </h6>
      <div class="card-text">
       ${event.eventDate}
       ${event.location}
     </div>
     <button type="button" id="delete-event--${event.id}" class="btn btn-sm btn-danger">X</button>
     <button type="button" id="edit-event--${event.id}" class="btn btn-sm btn-warning">✎</button>
     </div>
     </div>`
    }
  },
//*************************************************************************
// Create a HTML content for the MAIN container - EDIT
//*************************************************************************
eventsMainContainerHtmlMakerEdit(eventToEdit) {
  return `<div><fieldset>
    <div class="form-group"
    <label for="eventsName">Name</label>
    <input class="form-control" id="eventName--${eventToEdit}" type="text">
    </div>
    <div class="form-group"
    <label for="eventsDate">Date</label>
    <input class="form-control" id="eventDate--${eventToEdit}" type="date">
    </div>
    <div class="form-group"
    <label for="location">Location</label>
    <input class="form-control" id="location--${eventToEdit}" type="text">
    </div>
  </fieldset>
  <button class="btn btn-primary" id="save-event--${eventToEdit}"> Save </button>
  </div>`
}
}