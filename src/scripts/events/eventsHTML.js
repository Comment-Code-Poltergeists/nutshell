let eventsArray = []

export default {

  eventsSideContainerHtmlMaker(event) {
    return `<div class="card bg-secondary border-dark">
    <div class="card-body">
   <h6 class="card-title"> ${event.eventName} </h6>
   <div class="card-text">
     ${event.eventDate}
     ${event.location}</div>
   </div>
   </div>`
}
}