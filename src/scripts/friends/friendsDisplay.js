import { buildSideFriendHTML, buildMainFriendHTML } from "./friendsHTML.js"
import { removeFriendFunctionality } from "./eventListeners.js"

// displays friend cards in side container
export const displaySideFriendsList = friendsArray => {
    let friendsListHTML = ""
    for (let friend of friendsArray) {
        friendsListHTML += buildSideFriendHTML(friend)
    }
    document.querySelector("#friends-content").innerHTML = friendsListHTML

    // add scroll bar functionality
    const friendsContent = document.getElementById("friends-content")
    friendsContent.scrollTop = friendsContent.scrollHeight
}

// displays friend cards in side container
export const displayMainFriendsList = friendsArray => {
    let friendsListHTML = "<h1>Friends List</h1>"
    for (let friend of friendsArray) {
        friendsListHTML += buildMainFriendHTML(friend)
    }
    document.querySelector("#main-container").innerHTML = friendsListHTML
    removeFriendFunctionality(friendsArray)
    
    // add scroll bar functionality
    const friendsContentMain = document.getElementById("main-container")
    friendsContentMain.scrollTop = friendsContentMain.scrollHeight
}

export const refreshFriendsDisplay = friendsList => {
    displaySideFriendsList(friendsList)
    displayMainFriendsList(friendsList)
}