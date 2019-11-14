/*
Purpose: export chat message functionality to src/main.js
Author: Ryan Bishop
 */

import messagesHtmlFactory from "./messagesHtmlFactory";
import { attachMessagesEvents } from "./messagesEventListeners.js";
import data from "../data/data";
import { sortElementsByDate } from "../utilities/datetime";

const messagesContent = document.getElementById("messages-content")
const mainContainer = document.getElementById("main-container")

const renderMessageList = messageArray => {
    messagesContent.innerHTML = ""
    messageArray.forEach(message => {
        messagesContent.innerHTML += messagesHtmlFactory.createPreviousMessageHtml(message)
    })
}

const renderMainMessageList = messageArray => {
    mainContainer.innerHTML = "<h3>Messages</h3>"
    messageArray.forEach(message => {
        mainContainer.innerHTML += messagesHtmlFactory.createMainPreviousMessageHtml(message)
    })
}

export function displayMessages(){
    const prevMessages = JSON.parse(sessionStorage.getItem("messages"))
    if (prevMessages){
        const sortedMessages = sortElementsByDate(prevMessages, "timestamp")
        renderMessageList(sortedMessages)
    } else {
        data.buildYourOwnGet("messages?_expand=user")
        .then(messages => {
            sessionStorage.setItem("messages", JSON.stringify(messages));
            const sortedMessages = sortElementsByDate(messages, "timestamp")
            renderMessageList(sortedMessages)
        })
    }
    const messagesContent = document.getElementById("messages-content")
    messagesContent.scrollTop = messagesContent.scrollHeight
    attachMessagesEvents()
}

export function displayMainMessages(){
    const prevMessages = JSON.parse(sessionStorage.getItem("messages"))
    if (prevMessages){
        const sortedMessages = sortElementsByDate(prevMessages, "timestamp")
        renderMainMessageList(sortedMessages)
    } else {
        data.buildYourOwnGet("messages?_expand=user")
        .then(messages => {
            sessionStorage.setItem("messages", JSON.stringify(messages));
            const sortedMessages = sortElementsByDate(messages, "timestamp")
            renderMainMessageList(sortedMessages)
        })
    }
    mainContainer.scrollTop = messagesContent.scrollHeight
    attachMessagesEvents()
}