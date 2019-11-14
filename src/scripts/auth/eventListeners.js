import API from "../data/data.js"

export const addLoginButtonListener = () => {
    document.getElementById("loginButton").addEventListener("click", () => {
        const enteredEmail = document.getElementById("login-name--new").value
        const enteredPassword = document.getElementById("login-pw--new").value
        API.buildYourOwnGet(`users?email=${enteredEmail}`).then((userObj) => {
            if (userObj.length === 0) {
                window.alert("That email does not match any current user.")
            } else {
                if (enteredPassword !== userObj[0].password) {
                    window.alert("That password does match your email!")
                } else {
                    
                }
            }
        })
    })
}