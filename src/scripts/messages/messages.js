/*
Purpose: export chat message functionality to src/main.js
Author: Ryan Bishop
 */

import messagesHtmlFactory from "./messagesHtmlFactory";
import { attachMessagesEvents } from "./messagesEventListeners.js";
import data from "../data/data";

const messagesContent = document.getElementById("messages-content")

const renderMessageList = messageArray => {
    messagesContent.innerHTML = ""
    messageArray.forEach(message => {
        messagesContent.innerHTML += messagesHtmlFactory.createPreviousMessageHtml(message)
    })
    // messagesContent.scrollTop = messagesContent.scrollHeight
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
    const messagesContent = document.getElementById("messages-content")
    messagesContent.scrollTop = messagesContent.scrollHeight
}