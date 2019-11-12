/*
Purpose: export chat message functionality to src/main.js
Author: Ryan Bishop
 */

import messagesHtmlFactory from "./messagesHtmlFactory";
import { attachMessagesEvents } from "./messagesEventListeners.js";
import data from "../data/data";

// Given a user wants to enter in a chat message
// When the user activates their account
// And enters a message into the New message text input
// Then their message should appear in the Chat area, prepended with the user's name

const messagesContainer = document.getElementById("messages-container")

const renderMessageList = messageArray => {
    const messagesContent = document.getElementById("messages-content")
    messagesContent.innerHTML = ""
    messageArray.forEach(message => {
        messagesContent.innerHTML += messagesHtmlFactory.createPreviousMessageHtml(message)
    })
    messagesContent.scrollTop = messagesContent.scrollHeight
}

export function displayMessages(){
    const prevMessages = JSON.parse(sessionStorage.getItem("messages"))
    if (prevMessages.length !== null){
        renderMessageList(prevMessages)
    } else {
        data.buildYourOwnGet("messages?_expand=user")
            .then(messages => {
                sessionStorage.setItem("messages", JSON.stringify(messages));
                renderMessageList(messages)
            })
    }
}