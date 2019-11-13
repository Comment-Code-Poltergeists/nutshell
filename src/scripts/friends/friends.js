import { displaySideFriendsList } from "./friendsDisplay.js"

// container for all "friends" functionality
export const friendsDisplay = () => {
    const friendsList = JSON.parse(window.sessionStorage.getItem("friends"))
    displaySideFriendsList(friendsList)
}