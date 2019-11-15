import API from "../data/data.js"
import { getDataAndShowEverything } from "../main.js"

export const addLoginButtonListener = () => {
    document.getElementById("loginButton").addEventListener("click", () => {
        const enteredEmail = document.getElementById("login-name--new").value
        const enteredPassword = document.getElementById("login-pw--new").value
        console.log("pulled values", enteredEmail, enteredPassword)
        API.buildYourOwnGet(`users?email=${enteredEmail}`).then((userObj) => {
            if (userObj.length === 0) {
                window.alert("That email does not match any current user.")
            } else {
                if (enteredPassword !== userObj[0].password) {
                    window.alert("That password does match your email!")
                } else {
                    console.log("login")
                    $("#login-modal").modal("hide")
                    console.log(userObj[0].id)
                    sessionStorage.setItem("userId", JSON.stringify(userObj[0].id))
                    getDataAndShowEverything();
                }
            }
        })
    })
}

export const addRegisterButtonListener = () => {
    document.getElementById("registerButton").addEventListener("click", () => {
        const email = document.getElementById("register-email--new").value
        const password = document.getElementById("register-pw--new").value
        const confirmPassword = document.getElementById("confirm-pw--new").value
        const fullName = document.getElementById("register-name--new").value
        
        API.buildYourOwnGet(`users?email=${email}`).then((userObj) => {
            if (userObj.length === 1) {
                window.alert("That email already has an account.")
            } else {
                if (password !== confirmPassword) {
                    window.alert("Those passwords do not match!!")
                } if (fullName === "") {
                    window.alert("You must enter your name!!")
                } else {
                    console.log("register")
                    API.createSomething("users", {fullName, email, password}).then((data) => {
                        console.log(data)
                        sessionStorage.setItem("userId", JSON.stringify(data.id))
                        getDataAndShowEverything();
                        $("#register-modal").modal("hide")
                    })
                }
            }
        })
    })
}