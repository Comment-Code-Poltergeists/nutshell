import { buildSideFriendHTML, buildMainFriendHTML } from "./friendsHTML.js"

// displays friend cards in side container
export const displaySideFriendsList = friendsArray => {
    let friendsListHTML = ""
    for (let friend of friendsArray) {
        friendsListHTML += buildSideFriendHTML(friend)
    }
    document.querySelector("#friends-content").innerHTML = friendsListHTML
}

// displays friend cards in side container
export const displayMainFriendsList = friendsArray => {
    let friendsListHTML = "<h1>Friends List</h1>"
    for (let friend of friendsArray) {
        friendsListHTML += buildMainFriendHTML(friend)
    }
    document.querySelector("#main-container").innerHTML = friendsListHTML
}