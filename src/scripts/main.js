/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/
import API from "./data/data.js"
import { displayMessages } from "./messages/messages.js"
import { eventsClickHandler } from "./events/eventListeners.js"
import eventManager from "./events/events"
import { renderTaskCard } from "./tasks/renderDOM.js"
import { clickTaskCardListener } from "./tasks/eventListeners.js"
import { displayFriends } from "./friends/friends.js"
sessionStorage.setItem("userId", "2")
const userId = JSON.parse(sessionStorage.getItem("userId"))


//tried to make a big function to get everything at the start, doesnt quite work :(
API.fetchEverything(userId).then(yourInfo => {
    displayMessages()
    displayFriends()
    eventManager.displayEvents()
    
    eventsClickHandler() // looking for a click on the Events container
    renderTaskCard()
    clickTaskCardListener()
})    

