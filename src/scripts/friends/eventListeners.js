import { displayMainFriendsList, refreshFriendsDisplay } from "./friendsDisplay.js"
import dataJS from "../data/data.js"
import { userId } from "../main.js"

// display friends list in main when friends side container is clicked
export const clickFriendsSideContainer = (friendsList) => {
    document.querySelector("#friends-container").addEventListener("click", event => {
        displayMainFriendsList(friendsList)
    })
}

// removes friend from json database
export const removeFriendFunctionality = () => {
    const removeButtonArray = document.querySelectorAll(".remove-button")
    for (const btn of removeButtonArray)
        btn.addEventListener("click", event => {
            // sets button id corresponding to the friends id in the database
            dataJS.deleteSomething(`friends/${event.target.id.split("-")[1]}`)
            .then(r => {
                // GET updated friends list
                dataJS.buildYourOwnGet(`friends?loggedInUser=${userId}&_expand=user`)
                .then(updatedFriendsArray => {
                    // update session storage
                    sessionStorage.setItem("friends", JSON.stringify(updatedFriendsArray))
                    // render dom with new data
                    refreshFriendsDisplay(updatedFriendsArray)
                })
            })
    })
}