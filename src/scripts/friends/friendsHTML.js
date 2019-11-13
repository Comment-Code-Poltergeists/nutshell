// build individual friend card for side container
export const buildSideFriendHTML = friendObj => {
    return `
    <div class="friend-card">
        <div class="friend-inline-el">${friendObj.user.fullName}</div>
        <div class="friend-inline-el">${friendObj.user.email}</div>
    </div>
    `
}