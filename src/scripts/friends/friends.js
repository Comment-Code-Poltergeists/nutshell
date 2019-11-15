/*
Purpose: Main module that builds the friends section of the app
Author: Chase Fite
 */

import { displaySideFriendsList } from "./friendsDisplay.js"
import { clickFriendsSideContainer, addSearchFunction } from "./friendsEventListeners.js"
import dataJS from "../data/data.js"

// container for all "friends" functionality
// checks if session storage exists. if not it does a get fetch and renders the page
export const displayFriends = () => {
    const friendsList = JSON.parse(sessionStorage.getItem("friends"))
    const loggedInUser = JSON.parse(sessionStorage.getItem("userId"))
    if (friendsList) {
        displaySideFriendsList(friendsList)
        clickFriendsSideContainer()
        addSearchFunction()
    } else {
        dataJS.buildYourOwnGet(`friends?loggedInUser=${loggedInUser}&_expand=user`)
        .then(friendsArray => {
            sessionStorage.setItem("friends", JSON.stringify(friendsArray))
            displaySideFriendsList(friendsArray)
            clickFriendsSideContainer()
            addSearchFunction()
        })
    }
}