let eventCounter = 0

export default {

  eventsSideContainerHtmlMaker(event) {
    if (eventCounter === 0) { // the next upcoming event based on the sorted array
      eventCounter++
      return `
     <div class="card bg-secondary border-dark">
     <div class="card-body">
     <h6 class="card-title"><b> ${event.eventName} </b></h6>
     <div class="card-text">
      <b> ${event.eventDate}</b>
      <b> ${event.location} </b>
     </div>
     </div>
     </div>`
    } else {
      eventCounter++
      return `
      <div class="card bg-secondary border-dark">
      <div class="card-body">
      <h6 class="card-title"> ${event.eventName} </h6>
      <div class="card-text">
       ${event.eventDate}
       ${event.location}
     </div>
     </div>
     </div>`
    }

  }
}