import eventsHTML from "./eventsHTML.js"
import { sortElementsByDate } from "../utilities/datetime.js"
import data from "../data/data.js"
import { userId } from "../main";


const eventContainer = document.getElementById("events-content")
const mainContainerRef = document.getElementById("main-container")
const eventsMainContainerRef = document.getElementById("events-container")
let eventsArray = []

//*************************************************************************
// Listening to all the Event clicks
//*************************************************************************
const eventManager = {
  setAllEventListeners() {
    eventManager.displayMainEvents()
    eventManager.deleteOrEditAnEvent()
  },
  //*************************************************************************
  // Show the events in the SIDE container
  //*************************************************************************
  displaySideEvents() {
    console.log("GET events")
    eventsArray = JSON.parse(window.sessionStorage.getItem("events"))
    console.log(eventsArray)

    let sortedEventsArray = sortElementsByDate(eventsArray, "eventDate")
    console.log(sortedEventsArray)

    let HtmlForAllEvents = ""
    sortedEventsArray.forEach(event => {
      console.log(event)
      const eventHtml = eventsHTML.eventsSideContainerHtmlMaker(event)
      HtmlForAllEvents += eventHtml
    })
    eventContainer.innerHTML = HtmlForAllEvents
  },
  //*************************************************************************
  // Show the events in the MAIN container
  //*************************************************************************
  displayMainEvents() {
    eventsMainContainerRef.addEventListener("click", function () {
      console.log("DISPLAY events")
      eventsArray = JSON.parse(window.sessionStorage.getItem("events"))
      console.log(eventsArray)

      let sortedEventsArray = sortElementsByDate(eventsArray, "eventDate")
      console.log(sortedEventsArray)

      let HtmlForAllEvents = ""
      sortedEventsArray.forEach(event => {
        console.log(event)
        const eventHtml = eventsHTML.eventsMainContainerHtmlMaker(event)
        HtmlForAllEvents += eventHtml
      })
      mainContainerRef.innerHTML = "<h1>All Events</h1>"
      mainContainerRef.innerHTML += HtmlForAllEvents

      eventManager.saveNewEvent() // event listener for the save new event modal form
      eventManager.saveNewEventListener() // event listener for ther save new event button
    })
  },
  //*************************************************************************
  // REFRESH the events in the MAIN container
  //*************************************************************************
  refreshMainEvents() {
    eventsArray = JSON.parse(window.sessionStorage.getItem("events"))
    console.log(eventsArray)

    let sortedEventsArray = sortElementsByDate(eventsArray, "eventDate")
    console.log(sortedEventsArray)

    let HtmlForAllEvents = ""
    sortedEventsArray.forEach(event => {
      console.log(event)
      const eventHtml = eventsHTML.eventsMainContainerHtmlMaker(event)
      HtmlForAllEvents += eventHtml
    })
    mainContainerRef.innerHTML = "<h1>All Events</h1>"
    mainContainerRef.innerHTML += HtmlForAllEvents
  },
  //*************************************************************************
  // DELETE an event
  //*************************************************************************
  deleteOrEditAnEvent() {
    document.getElementById("main-container").addEventListener("click", function (e) {
      console.log(e.target.id)
      if (event.target.id.startsWith("delete-event")) {
        const eventToDelete = event.target.id.split("--")[1]
        console.log(`Please delete event number:  ${eventToDelete}`)
        data.deleteSomething(`events/${eventToDelete}`)
        data.fetchEverything(userId)
          .then(() => {
            eventManager.updateDomEvents()
          })
  //*************************************************************************
  // EDIT an event
  //*************************************************************************
      } else if (event.target.id.startsWith("edit-event")) {
        const eventToEdit = event.target.id.split("--")[1]
        console.log(`Please edit event number:  ${eventToEdit}`)
       
        let eventContainerForEdit = `event-container--${eventToEdit}`

        // Rendering the EDIT form
        document.getElementById(eventContainerForEdit).innerHTML = eventsHTML.eventsMainContainerHtmlMakerEdit(eventToEdit)
        
        // Populating the form
        data.buildYourOwnGet(`events/${eventToEdit}`).then((eventsObj) => {
          console.log(eventsObj)
          document.getElementById(`eventName--${eventToEdit}`).value = eventsObj.eventName
          document.getElementById(`eventDate--${eventToEdit}`).value = eventsObj.eventDate
          document.getElementById(`location--${eventToEdit}`).value = eventsObj.location
          
          console.log(eventsObj.eventName, eventsObj.eventDate, eventsObj.location)
        })
          // Saving the new content
        document.getElementById(`event-container--${eventToEdit}`).addEventListener("click", function (){
          if (event.target.id.startsWith("save-event")) {
            const eventToSave = event.target.id.split("--")[1]
            let eventToSaveName = document.getElementById(`eventName--${eventToEdit}`).value
            let eventToSaveDate = document.getElementById(`eventDate--${eventToEdit}`).value
            let eventToSaveLocation = document.getElementById(`location--${eventToEdit}`).value

            data.patchSomething(`events/${eventToSave}`, {"eventName": eventToSaveName, "eventDate":  eventToSaveDate, "location": eventToSaveLocation}).then(eventManager.updateDomEvents)
          }
        })
      }
    })
  },
  //*************************************************************************
  // SAVE a new event
  //*************************************************************************
  saveNewEvent(){

    const modalTitle = document.querySelector("#nutshell-modal-title");
    const modalBody = document.querySelector("#nutshell-modal-body");
    const modalFooter = document.querySelector("#nutshell-modal-footer");
    
    document.querySelector("#mainButton").innerHTML="Add New Event"
  
    modalTitle.textContent = "Add New Event";
    modalBody.innerHTML = eventsHTML.buildNewEventForm();
    modalFooter.innerHTML = eventsHTML.buildEventFormButtons();


  },
  //*************************************************************************
  // Event listener for the SAVE new event button
  //*************************************************************************
  saveNewEventListener() {
    const saveNewEventButton = document.querySelector("#new-event-save");
    saveNewEventButton.addEventListener("click", () => {
      // POST
      const newEventName = document.querySelector("#event-name--new").value;
      const newEventDate = document.querySelector("#event-date--new").value;
      const newEventlocation = document.querySelector("#event-location--new").value;


      if (newEventName && newEventDate && newEventlocation) {
        const newEvent = {
          userId: userId,
          eventName: newEventName,
          eventDate: newEventDate,
          location: newEventlocation
        };
  
        data.createSomething("events", newEvent).then(()=>{
          eventManager.updateDomEvents()
        })
      }
    })
    },
  //*************************************************************************
  // REFRESH the DOM
  //*************************************************************************
  updateDomEvents() {
    const friendsList = JSON.parse(sessionStorage.getItem("friends"))
    let Url = `events?userId=${userId}`;
    friendsList.forEach(element => {
      Url += `&userId=${element.user.id}`
    });
    data.buildYourOwnGet(Url).then((eventsArray) => {
      sessionStorage.setItem("events", JSON.stringify(eventsArray));
      eventManager.displaySideEvents();
      eventManager.refreshMainEvents();
    })
  }

}

export default eventManager