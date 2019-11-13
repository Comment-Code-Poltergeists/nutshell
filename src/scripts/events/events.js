import eventsHTML from "./eventsHTML.js"
import {sortElementsByDate} from "../utilities/datetime.js"

const eventContainer = document.getElementById("events-content")
const mainContainerRef = document.getElementById("main-container")
let eventsArray = []


const eventManager = {
  displaySideEvents() {
    console.log("GET events")
    eventsArray = JSON.parse(window.sessionStorage.getItem("events"))
    console.log(eventsArray)

    let sortedEventsArray = sortElementsByDate(eventsArray, "eventDate")
   console.log(sortedEventsArray)

      let HtmlForAllEvents= ""
      sortedEventsArray.forEach(event => {
        console.log(event)
        const eventHtml = eventsHTML.eventsSideContainerHtmlMaker(event)
        HtmlForAllEvents += eventHtml
      })
      eventContainer.innerHTML = HtmlForAllEvents

    },
  
  saveUserEvents() {
    console.log("SAVE events")
  },
  displayMainEvents() {
    console.log("DISPLAY events")
    eventsArray = JSON.parse(window.sessionStorage.getItem("events"))
    console.log(eventsArray)

    let sortedEventsArray = sortElementsByDate(eventsArray, "eventDate")
   console.log(sortedEventsArray)

      let HtmlForAllEvents= ""
      sortedEventsArray.forEach(event => {
        console.log(event)
        const eventHtml = eventsHTML.eventsMainContainerHtmlMaker(event)
        HtmlForAllEvents += eventHtml
      })
      mainContainerRef.innerHTML = "<h1>All Events</h1>"
      mainContainerRef.innerHTML += HtmlForAllEvents
  }
  
}


export default eventManager