import eventsHTML from "./eventsHTML.js"

const eventContainer = document.getElementById("events-content")
const mainContainerRef = document.getElementById("main-container")
let eventsArray = []

const eventManager = {
  displayEvents() {

    console.log("GET events")
    eventsArray = JSON.parse(window.sessionStorage.getItem("events"))
    console.log(eventsArray)

      let HtmlForAllEvents= ""
      eventsArray.forEach(event => {
        console.log(event)
        const eventHtml = eventsHTML.eventsSideContainerHtmlMaker(event)
        HtmlForAllEvents += eventHtml
      })
      eventContainer.innerHTML = HtmlForAllEvents
    },
  
  saveUserEvents() {
    console.log("SAVE events")
  },
  displayUserEvents() {
    console.log("DISPLAY events")
    mainContainerRef.innerHTML= "<h1>MORE EVENTS</h1>"
  }
  
}


export default eventManager