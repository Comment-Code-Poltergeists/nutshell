export default {
    // get friends list
    friendsList: JSON.parse(window.sessionStorage.getItem("friends")),
    
    // build friend html template
    buildSideFriendHTML(friendObj) {
        return `
        <div class="friend-card">
            <div class="friend-inline-el">${friendObj.user.fullName}</div>
            <div class="friend-inline-el">${friendObj.user.email}</div>
        </div>
        `
    },

    // display friends list in side container
    displaySideFriendsList(friendsArray) {
        let friendsListHTML = ""
        for (let friend of friendsArray) {
            friendsListHTML += this.buildSideFriendHTML(friend)
        }
        document.querySelector("#friends-content").innerHTML = friendsListHTML
    },

    buildMainFriendHTML(friendObj) {
        
    }
}