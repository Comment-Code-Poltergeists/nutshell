import API from "../data/data.js"

const eventsMainContainerRef = document.getElementById("events-container")
const eventContainer = document.getElementById("events-content")
const mainContainerRef = document.getElementById("main-container")

let eventsArray = []

const eventManager = {
  eventsClickHandler(){
    eventsMainContainerRef.addEventListener("click", this.displayUserEvents)
  },
  getUserEvents() {

    console.log("GET events")
    eventsArray = JSON.parse(window.sessionStorage.getItem("events"))

    console.log(eventsArray)
    eventContainer.innerHTML = `
      <div class="card bg-secondary border-dark">
      <div class="card-body">
     <h6 class="card-title"> ${eventsArray[0].eventName} </h6>
     <div class="card-text">
       ${eventsArray[0].eventDate}
       ${eventsArray[0].location}</div>
     </div>
     </div>

     <br>

     <div class="card bg-secondary border-dark">
      <div class="card-body">
     <h6 class="card-title"> ${eventsArray[0].eventName} </h6>
     <div class="card-text">
       ${eventsArray[0].eventDate}
       ${eventsArray[0].location}</div>
     </div>
     </div>
  `
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