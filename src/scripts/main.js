/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/
import API from "./data/data.js"
import { displayMessages } from "./messages/messages.js"
import eventManager from "./events/events"
import { eventsClickHandler } from "./events/eventListeners.js"
sessionStorage.setItem("userId", "2")
const userId = JSON.parse(sessionStorage.getItem("userId"))


//tried to make a big function to get everything at the start, doesnt quite work :(
API.fetchEverything(2).then(() => {
    displayMessages()
    eventManager.getUserEvents() // populating the Events container with events from the cache
})


eventsClickHandler() // looking for a click on the Events container

