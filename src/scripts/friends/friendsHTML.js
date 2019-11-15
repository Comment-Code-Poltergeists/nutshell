/*
Purpose: Contains functions that build html elements for the dom
Author: Chase Fite
 */

// build individual friend card for side container
export const buildSideFriendHTML = friendObj => {
    return `
    <div class="friend-card">
        <div class="friend-inline-el">${friendObj.user.fullName}</div>
        <div class="friend-inline-el">${friendObj.user.email}</div>
    </div>
    `
}

// build individual friend card for main container
export const buildMainFriendHTML = friendObj => {
    return `
    <div class="friend-card">
        <div class="friend-inline-el">${friendObj.user.fullName}</div>
        <div class="remove-button-container">
            <span class="friend-inline-el">${friendObj.user.email}</span>
            <button id="removeButton-${friendObj.id}" class="remove-button btn btn-sm btn-danger">X</button>
        </div>
    </div>
    `
}

export const buildFindUsersHTML = userObj => {
    return `
    <div id="find-user-event--${userObj.id}" class="friend-card newFriend">
        <div id="find-user-event--${userObj.id}" class="friend-inline-el">${userObj.fullName}</div>
        <div id="find-user-event--${userObj.id}" class="friend-inline-el">${userObj.email}</div>
    </div>
    `
}