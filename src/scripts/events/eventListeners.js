import eventManager from "./events.js"

const eventsMainContainerRef = document.getElementById("events-container")

export const eventsClickHandler=()=>{  //looking for a click on the Events container
  eventsMainContainerRef.addEventListener("click", eventManager.displayMainEvents)
}