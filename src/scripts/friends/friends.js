/*
Purpose: Main module that builds the friends section of the app
Author: Chase Fite
 */

import { displaySideFriendsList } from "./friendsDisplay.js"
import { clickFriendsSideContainer, addSearchFunction } from "./eventListeners.js"

// container for all "friends" functionality
export const displayFriends = () => {
    const friendsList = JSON.parse(window.sessionStorage.getItem("friends"))
    displaySideFriendsList(friendsList)
    clickFriendsSideContainer()
    addSearchFunction()
}