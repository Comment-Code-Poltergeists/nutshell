import { buildSideFriendHTML } from "./friendsHTML.js"

// displays friend cards in side container
export const displaySideFriendsList = friendsArray => {
    let friendsListHTML = ""
    for (let friend of friendsArray) {
        friendsListHTML += buildSideFriendHTML(friend)
    }
    document.querySelector("#friends-content").innerHTML = friendsListHTML
}