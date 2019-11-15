/*
Purpose: create HTML for each of the 'messages' DOM elements
Author(s): Ryan Bishop, Chase Fite
 */
import { convertDateTimeFromISO } from "../utilities/datetime"

export default {
    createNewMessageHtml(){
        return `<div id="new-messageContainer">
            <input id="new-message" class="rounded" type="text" name="message">
            <button id="send-message" class="btn btn-primary btn-sm">New Message</button>
            </div>
            <br>
        `
    },
    
    createPreviousMessageHtml(message){
        const formattedtime = convertDateTimeFromISO(message.timestamp).toLocaleString()
        const userId = JSON.parse(sessionStorage.getItem("userId"))

        return `
            <strong><span>${message.user.fullName}</span></strong>
            <div id="message--${message.id}" class="card bg-secondary border-dark">${message.message}
            </div>
            <p class="message-timestamp">${formattedtime}</p>
            `
    },
    createMainPreviousMessageHtml(message){
        const formattedtime = convertDateTimeFromISO(message.timestamp).toLocaleString()
        const userId = JSON.parse(sessionStorage.getItem("userId"))
        
        const friendsList = JSON.parse(window.sessionStorage.getItem("friends"))
        const friendsIdArray = []
        friendsList.forEach((friend) => {
            const friendId = friend.userId
            friendsIdArray.push(friendId)
        })

        let editButton
        let deleteButton
        let buttonGroup
        let friendStatus

        if (message.user.id === userId){
            editButton = `<button id="edit-message--${message.id}" class="btn btn-warning btn-sm btn-message">✎</button>`
            deleteButton = `<button id="delete-message--${message.id}" class="btn btn-danger btn-sm btn-message">X</button>`
            buttonGroup = `<div class="btn-group" role="group">${editButton}${deleteButton}</div>`
            friendStatus = "current-user"
        }
        else if (!friendsIdArray.includes(message.user.id)){
            friendStatus = "not-friend"
            buttonGroup = ""
        }
        else {
            buttonGroup = ""
            friendStatus = ""
        }
        return `
            <strong><span id="add-friend--${message.user.id}"class=${friendStatus}>${message.user.fullName}</span></strong>
            <div class="card bg-secondary border-dark">
            <div id="main-message--${message.id}">${message.message}${buttonGroup}</div>
            </div>
            <p class="message-timestamp">${formattedtime}</p>
            `
    },
    buildNewMessageForm() {
        const newMessageForm = `
        <div class="card-body">
          <label for="message--new">Message:</label>
          <input id="message--new" type="text" class="form-control">
        </div>
        `
  
      return newMessageForm
    },
    buildMessageFormButtons() {
        return `
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" id="new-message-save" class="btn btn-primary" data-dismiss="modal">Post Message</button>
        `
      }
}