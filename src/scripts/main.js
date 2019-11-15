/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/
import API from "./data/data.js"
import { displayMessages } from "./messages/messages.js"
import eventManager from "./events/events"
import { populateArticleModule } from "./articles/articles.js"
import { renderTaskCard } from "./tasks/renderDOM.js"
import { clickTaskCardListener } from "./tasks/eventListeners.js"
import { displayFriends } from "./friends/friends.js"
import { addArticleEventListeners } from "./articles/eventListeners.js"
import {addLoginButtonListener, addRegisterButtonListener} from "./auth/eventListeners.js"
import { renderRegisterModal } from "./auth/renderDOM.js"
// sessionStorage.setItem("userId", "2")

export const getDataAndShowEverything = () => {
    return API.fetchEverything(userId).then(() => {
        displayMessages()
        displayFriends()
        eventManager.displaySideEvents()
        eventManager.setAllEventListeners()
        populateArticleModule();
        addArticleEventListeners();
        renderTaskCard()
        clickTaskCardListener()
})}

export const userId = JSON.parse(sessionStorage.getItem("userId"))
renderRegisterModal()
addLoginButtonListener();
addRegisterButtonListener();
if (sessionStorage.getItem("userId") !== null) {
    
  getDataAndShowEverything()

} else {
    $("#login-modal").modal("show")


}



