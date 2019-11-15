sessionStorage.setItem("eventsCounterReset", false)

const eventsCounterResetStatus = window.sessionStorage.getItem("eventsCounterReset")

console.log(eventsCounterResetStatus)

let SideEventCounter = 0
let mainEventCounter = 0


export default {
//*************************************************************************
// Create a HTML content for the side container
//*************************************************************************
  eventsSideContainerHtmlMaker(event) {
    
    if (eventsCounterResetStatus){   // checking if there is a rdequest to reset the counter
      sessionStorage.setItem("eventsCounterReset", false)
      SideEventCounter = 0
    }

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
     </div>
     <br>
     `
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
     </div>
     <br>
     `
    }
  },
//*************************************************************************
// Create a HTML content for the MAIN container - DISPLAY
//*************************************************************************
  eventsMainContainerHtmlMaker(event) {
    if (mainEventCounter === 0) { // the next upcoming event based on the sorted array
      mainEventCounter++
      return `
     <div class="card bg-secondary border-dark" id="event-container--${event.id}">
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
      <div class="card bg-secondary border-dark" id="event-container--${event.id}"> 
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
},
//*************************************************************************
// Create a HTML content for ADD modal window
//*************************************************************************
buildNewEventForm(){
return `
      <div class="card-body">
        <label for="event-name--new">Event name:</label>
        <input id="event-name--new" type="text" class="form-control" value="">
        <label for="event-date--new">Date:</label>
        <input id="event-date--new" type="date" class="form-control" value="">
        <label for="event-name--new">Location:</label>
        <input id="event-location--new" type="text" class="form-control" value="">
      </div>
      `
},
//*************************************************************************
// Create a BUTTONS for ADD modal window
//*************************************************************************
buildEventFormButtons(){
  return `
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    <button type="button" id="new-event-save" class="btn btn-primary" data-dismiss="modal">Save changes</button>`
}
}