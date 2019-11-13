import { displaySideFriendsList, displayMainFriendsList } from "./friendsDisplay.js"
import { clickFriendsSideContainer } from "./eventListeners.js"

// container for all "friends" functionality
export const displayFriends = () => {
    const friendsList = JSON.parse(window.sessionStorage.getItem("friends"))
    displaySideFriendsList(friendsList)
    clickFriendsSideContainer(friendsList)
}