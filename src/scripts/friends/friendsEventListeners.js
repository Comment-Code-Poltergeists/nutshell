/*
Purpose: Contains various event listeners for functionality
Author: Chase Fite
 */

import { displayMainFriendsList, refreshFriendsDisplay, displayFindUsersMain } from "./friendsDisplay.js"
import dataJS from "../data/data.js"
import { userId } from "../main.js"

// display friends list in main when friends side container is clicked
export const clickFriendsSideContainer = () => {
    document.querySelector("#friends-container").addEventListener("click", event => {
        const friendsList = JSON.parse(sessionStorage.getItem("friends"))
        console.log("friendsList", friendsList)
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

export const addSearchFunction = () => {
    // sets "Find Users" title for main container on click
    document.querySelector("#searchInput").addEventListener("click", () => {
        document.querySelector("#main-container").innerHTML = "<h1>Find Users</h1>"
    })
    document.querySelector("#searchButton").addEventListener("click", () => {
        event.preventDefault()
        
        // add scroll functionality
        const findUsersMain = document.getElementById("main-container")
        findUsersMain.scrollTop = findUsersMain.scrollHeight
        
        // clears main container in prep for another search
        document.querySelector("#main-container").innerHTML = "<h1>Find Users</h1>"
        
        // get a list of friends from session storage and create a list of user ids
        const friendsList = JSON.parse(sessionStorage.getItem("friends"))
        const loggedInUser = JSON.parse(sessionStorage.getItem("userId"))

        // adds the logged in user id to this list so we cannot search for ourself as well
        let friendUserIdList = [loggedInUser]
        friendsList.forEach(friend => {
            friendUserIdList.push(friend.userId)
        })
        
        // get all the users from the database and display only the users
        // that are not currently on the logged in users friends list
        dataJS.buildYourOwnGet("users")
        .then(usersArray => {
            displayFindUsersMain(usersArray, friendUserIdList)
        })
    })

    // adds functionality that lets the user add friends by searching
    const loggedInUser = JSON.parse(sessionStorage.getItem("userId"))
    addFriendFromSearch(loggedInUser)
}

export const addFriendFromSearch = (loggedInUserId) => {
    document.querySelector("#main-container").addEventListener("click", () => {
        // targetting searched users
        if (event.target.id.includes("find-user-event")) {
            const userId = event.target.id.split("--")[1]
            // if accept confirmation window
            if (window.confirm("Would you like to add this person as a friend?")){
                // POST new friend object
				dataJS.createSomething("friends", {"userId": parseInt(userId), "loggedInUser": loggedInUserId})
				.then(r => {
					// GET updated friends list
					dataJS.buildYourOwnGet(`friends?loggedInUser=${loggedInUserId}&_expand=user`)
					.then(updatedFriendsArray => {
						// update session storage
						sessionStorage.setItem("friends", JSON.stringify(updatedFriendsArray))
						// render dom with new data
						refreshFriendsDisplay(updatedFriendsArray)
					})
				})
			}
        }
    })
}