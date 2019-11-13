import { displaySideFriendsList, displayMainFriendsList } from "./friendsDisplay.js"

// container for all "friends" functionality
export const displayFriends = () => {
    const friendsList = JSON.parse(window.sessionStorage.getItem("friends"))
    displaySideFriendsList(friendsList)
    displayMainFriendsList(friendsList)

    const friendsContent = document.getElementById("friends-content")
    friendsContent.scrollTop = friendsContent.scrollHeight
}