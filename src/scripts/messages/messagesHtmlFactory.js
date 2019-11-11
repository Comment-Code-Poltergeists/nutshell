/*
Purpose: create HTML for each of the 'messages' DOM elements
Author: Ryan Bishop
 */
export default {
    createNewMessageHtml(){
        return `
            <input id="new-message" type="text" name="message">
            <button id="send-message" class="btn btn-primary">New Message</button>
        `
    },
    cratePreviousMessageHtml(message){
        return `
            <p>${message.message}</p>
        `
    }
}