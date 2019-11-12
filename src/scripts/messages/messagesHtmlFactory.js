import { convertDateTimeFromISO } from "../utilities/datetime"

/*
Purpose: create HTML for each of the 'messages' DOM elements
Author: Ryan Bishop
 */
export default {
    createNewMessageHtml(){
        return `<div id="new-messageContainer">
            <input id="new-message" class="rounded" type="text" name="message">
            <button id="send-message" class="btn btn-primary btn-sm">New Message</button>
            </div>
        `
    },
    createPreviousMessageHtml(message){
        return `
            <span><strong>${message.user.fullName}</strong></span>
            <p id="message--${message.id}" class="message">${message.message}</p>
        `
    }
}