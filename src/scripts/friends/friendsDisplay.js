/*
Purpose: Contains functions used to populate the dom
Author: Chase Fite
 */

import { buildSideFriendHTML, buildMainFriendHTML } from "./friendsHTML.js"
import { removeFriendFunctionality } from "./eventListeners.js"
import { buildFindUsersHTML } from "./friendsHTML.js"

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

// displays a list of users to the main container that are not currently on our
// friends list if any part of the search is included in their name or email
export const displayFindUsersMain = (usersArray, friendUserIdList) => {
    const search = document.querySelector("#searchInput")
    usersArray.forEach(user => {
        if (!friendUserIdList.includes(user.id)) {
            if(user.fullName.includes(search.value) || user.email.includes(search.value)) {
                document.querySelector("#main-container").innerHTML += buildFindUsersHTML(user)
            }
        }
    })
}

export const refreshFriendsDisplay = friendsList => {
    displaySideFriendsList(friendsList)
    displayMainFriendsList(friendsList)
}