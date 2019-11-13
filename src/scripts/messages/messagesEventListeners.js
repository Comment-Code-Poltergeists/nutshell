/*
Purpose: attach/handle event listeners to the 'messages' DOM elements
Author: Ryan Bishop
 */
import API from "../data/data.js"
import { createDateTimeToISO } from "../utilities/datetime.js"
import { displayMessages } from "./messages.js"

// TODO: replace userId with sessionStorage userId
const userId = 1

const newMessageHandler = () => {
    const message = document.getElementById("new-message").value
    const timestamp = createDateTimeToISO()
    console.log("messageObj", {userId, message, timestamp})
    // TODO: POST request to database.json /messages and re-render DOM
    API.createSomething("messages", {userId, message, timestamp})
        .then(displayMessages)
}

const prevMessageButtonHandler = () => {
    console.log("clicked messages", event.target.id)
}

export function attachMessagesEvents(){
    //add event listener to 'New Message' button
    // document.getElementById("send-message").addEventListener("click", newMessageHandler)
    document.getElementById("messages-content").addEventListener("click", prevMessageButtonHandler)
}