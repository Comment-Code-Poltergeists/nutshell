import { sortElementsByDate } from "../utilities/datetime.js"

let SideEventCounter = 0
let mainEventCounter = 0
const userId = JSON.parse(sessionStorage.getItem("userId"))
export default {
//*************************************************************************
// Create a HTML content for the side container
//*************************************************************************
  eventsSideContainerHtmlMaker(event) {
    
    let eventsArray = JSON.parse(window.sessionStorage.getItem("events"))
    let sortedEventsArray = sortElementsByDate(eventsArray, "eventDate")


    let cardClasses
    if (event.userId !== userId) {
      cardClasses = "card border-dark csbg"
    }
    else {
      cardClasses = "card bg-secondary border-dark"
    }


    if (sortedEventsArray[0].id===event.id){

      console.log("FIRST EVENT")

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

    }else{

      console.log("NOT FIRST EVENT")

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


    let eventsArray = JSON.parse(window.sessionStorage.getItem("events"))
    let sortedEventsArray = sortElementsByDate(eventsArray, "eventDate")
    
    let cardClasses
    let buttonGroup
    
    if (event.userId !== userId) {
      cardClasses = "card border-dark csbg"
      buttonGroup = ""
    } else {
      cardClasses = "card bg-secondary border-dark"
      buttonGroup = `<button type="button" id="delete-event--${event.id}" class="btn btn-sm btn-danger">X</button>
      <button type="button" id="edit-event--${event.id}" class="btn btn-sm btn-warning">✎</button>`
    }


    if (sortedEventsArray[0].id===event.id){
   
      return `
     <div class="${cardClasses}" id="event-container--${event.id}">
     <div class="card-body">
     <h6 class="card-title"><b> ${event.eventName} </b></h6>
     <div class="card-text">
      <b> ${event.eventDate}</b>
      <b> ${event.location} </b>
     </div>
     ${buttonGroup}
     </div>
     </div>`
    } else { // not bolded entries for all the other events
     
      return `
      <div class="${cardClasses}" id="event-container--${event.id}"> 
      <div class="card-body">
      <h6 class="card-title"> ${event.eventName} </h6>
      <div class="card-text">
       ${event.eventDate}
       ${event.location}
     </div>
     ${buttonGroup}
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