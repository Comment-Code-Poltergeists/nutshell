/*
Purpose: attach/handle event listeners to the 'messages' DOM elements
Author: Ryan Bishop
 */

const newMessageHandler = () => {
    const newMessage = document.getElementById("new-message").value
    console.log("newMessage", newMessage)
    // TODO: POST request to database.json /messages and re-render DOM
    
}

export function attachMessagesEvents(){
    //add event listener to 'New Message' button
    document.getElementById("send-message").addEventListener("click", newMessageHandler)
}