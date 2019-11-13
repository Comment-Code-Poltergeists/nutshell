import { displaySideFriendsList, displayMainFriendsList } from "./friendsDisplay.js"
import { clickFriendsSideContainer } from "./eventListeners.js"

// container for all "friends" functionality
export const displayFriends = () => {
    const friendsList = JSON.parse(window.sessionStorage.getItem("friends"))
    displaySideFriendsList(friendsList)
    clickFriendsSideContainer(friendsList)

    // adds scroll bar to friends side container and main when populated
    const friendsContentMain = document.getElementById("main-container")
    friendsContentMain.scrollTop = friendsContentMain.scrollHeight
    const friendsContent = document.getElementById("friends-content")
    friendsContent.scrollTop = friendsContent.scrollHeight
}