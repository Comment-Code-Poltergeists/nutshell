/*
Purpose: create HTML for each of the 'messages' DOM elements
Author: Ryan Bishop
 */
import { convertDateTimeFromISO } from "../utilities/datetime"

export default {
    createNewMessageHtml(){
        return `<div id="new-messageContainer">
            <input id="new-message" class="rounded" type="text" name="message">
            <button id="send-message" class="btn btn-primary btn-sm">New Message</button>
            </div>
        `
    },
    createPreviousMessageHtml(message){
        const formattedtime = convertDateTimeFromISO(message.timestamp).toLocaleString()
        return `
            <span class="message-timestamp">${formattedtime}</span>
            <span><strong>${message.user.fullName}</strong></span>
            <p id="message--${message.id}" class="message">${message.message}</p>
        `
    }
}