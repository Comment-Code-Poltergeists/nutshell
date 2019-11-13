import eventManager from "./events.js"

const eventsMainContainerRef = document.getElementById("events-container")

export const eventsClickHandler=()=>{
  eventsMainContainerRef.addEventListener("click", eventManager.displayUserEvents)
}