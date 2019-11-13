/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/
import API from "./data/data.js"
import { displayMessages } from "./messages/messages.js"
import eventManager from "./events/events"
import { populateArticleModule } from "./articles/articles.js"
import { articlesEventListener } from "./articles/eventListeners.js"
sessionStorage.setItem("userId", "2")
const userId = JSON.parse(sessionStorage.getItem("userId"))


// API.fetchFriendsList(1).then((friendData) => console.log(friendData))

API.fetchEverything(2).then(yourInfo => {
    displayMessages()
    
    populateArticleModule();
})
// API.buildYourOwnGet("messages?userId=1").then(messages => console.log("messages", messages))



eventManager.getUserEvents()
eventManager.eventsClickHandler()
