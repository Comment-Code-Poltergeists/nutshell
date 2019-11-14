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
            <br>
        `
    },
    
    createPreviousMessageHtml(message){
        const formattedtime = convertDateTimeFromISO(message.timestamp).toLocaleString()
        const userId = JSON.parse(sessionStorage.getItem("userId"))

        return `
            <span class="message-timestamp">${formattedtime}</span>
            <span><strong>${message.user.fullName}</strong></span>
            <div id="message--${message.id}" class="card bg-secondary border-dark">${message.message}
            </div>
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
        }
        else {
            buttonGroup = ""
            friendStatus = ""
        }
        return `
            <span class=${friendStatus}><strong>${message.user.fullName}</strong></span>
            <span class="message-timestamp">${formattedtime}</span>
            <div class="card bg-secondary border-dark">
            <div id="main-message--${message.id}">${message.message}${buttonGroup}</div>
            </div>
            `
    }
}