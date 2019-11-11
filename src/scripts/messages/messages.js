import messagesHtmlFactory from "./messagesHtmlFactory";
import { attachMessagesEvents } from "./eventListeners";

/*
Purpose: export chat message functionality to src/main.js
Author: Ryan Bishop
 */

// Given a user wants to enter in a chat message
// When the user activates their account
// And enters a message into the New message text input
// Then their message should appear in the Chat area, prepended with the user's name

const messagesContent = document.getElementById("messages-content")

export function displayMessages(){
    messagesContent.innerHTML = ""
    const prevMessages = JSON.parse(sessionStorage.getItem("messages"))
    prevMessages.forEach((message)=>{
        messagesContent.innerHTML += messagesHtmlFactory.cratePreviousMessageHtml(message)
    })
    //create and render 'New Message' form to DOM
    messagesContent.innerHTML += messagesHtmlFactory.createNewMessageHtml()
    attachMessagesEvents()
}