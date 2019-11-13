import { displayMainFriendsList } from "./friendsDisplay"

// display friends list in main when friends side container is clicked
export const clickFriendsSideContainer = (friendsList) => {
    document.querySelector("#friends-container").addEventListener("click", event => {
        displayMainFriendsList(friendsList)
    })
}