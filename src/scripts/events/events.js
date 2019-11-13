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
    eventManager.deleteAnEvent()
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
// SAVE new event
//*************************************************************************
  saveUserEvents() {
    console.log("SAVE events")
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
    })
    
  
  },
//*************************************************************************
// DELETE a new event
//*************************************************************************
  deleteAnEvent() {
    document.getElementById("main-container").addEventListener("click", function (e) {
      console.log(e.target.id)
      if (event.target.id.startsWith("delete-event")) {
        const eventToDelete = event.target.id.split("--")[1]
        console.log(`Please delete event number:  ${eventToDelete}`)
        data.deleteSomething(`events/${eventToDelete}`)
        data.fetchEverything(userId)
        .then(()=>{
          eventManager.updateDomEvents()
        })
      
      }
    })
  },
//*************************************************************************
// REFRESH the DOM
//*************************************************************************
   updateDomEvents () {
    const friendsList = JSON.parse(sessionStorage.getItem("friends"))
    let Url = `events?userId=${userId}`;
    friendsList.forEach(element => {
        Url += `&userId=${element.user.id}`
    });
        data.buildYourOwnGet(Url).then((eventsArray) => {
        sessionStorage.setItem("events",JSON.stringify(eventsArray));
        this.displaySideEvents();
        this.displayMainEvents();
    })
}

}


export default eventManager