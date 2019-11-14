/*
Purpose: attach/handle event listeners to the 'messages' DOM elements
Author: Ryan Bishop
 */
import API from "../data/data.js";
import { createDateTimeToISO } from "../utilities/datetime.js";
import { displayMessages, displayMainMessages } from "./messages.js";
import data from "../data/data.js";
import { refreshFriendsDisplay } from "../friends/friendsDisplay.js"
import messagesHtmlFactory from "./messagesHtmlFactory.js";

//get logged-in user
const userId = JSON.parse(sessionStorage.getItem("userId"));

const newMessageHandler = () => {
	const messageInput = document.getElementById("message--new")
	const message = document.getElementById("message--new").value;
	const timestamp = createDateTimeToISO();
	// POST request to /messages and re-render DOM
	if (message === ""){
		window.alert("Please enter a message before sending.")
	}
	else {
		API.createSomething("messages", { userId, message, timestamp }).then(() => {
			data.buildYourOwnGet("messages?_expand=user").then((messages) => {
				sessionStorage.setItem("messages", JSON.stringify(messages));
				displayMessages();
				displayMainMessages();
				messageInput.value = ""
			});
		});
	};
};

const updateMessageInputfield = (event, messageObj) => {
	const messageContainer = document.getElementById(`main-message--${messageObj.id}`);
	const inputForm = `
    <input type="text" id="edited-message--${messageObj.id}"></br>
    <button id="update-message--${messageObj.id}" class="btn btn-primary">SAVE</button>
    `;

	messageContainer.innerHTML = inputForm;
	document.getElementById(`edited-message--${messageObj.id}`).value = messageObj.message;
	attachMessagesEvents();
};

const prevMessageButtonHandler = () => {
	const saveEvent = event;
	const clickedButton = event.target.id.split("--");
	const messageId = clickedButton[1];
	if (clickedButton[0] === "edit-message") {
		//get Message text from cache or DB
		data.buildYourOwnGet(`messages/${messageId}`).then((message) => {
			//populate DOM with input field to edit message
			updateMessageInputfield(saveEvent, message);
		});
	} else if (clickedButton[0] === "delete-message") {
        data.deleteSomething(`messages/${messageId}`)
            .then(() => {
                data.buildYourOwnGet("messages?_expand=user").then((messages) => {
                    sessionStorage.setItem("messages", JSON.stringify(messages));
                    displayMessages();
                    displayMainMessages();
                });
            })
	} else if (clickedButton[0] === "update-message") {
		const message = document.getElementById(`edited-message--${messageId}`).value;
		data.patchSomething(`messages/${messageId}`, { message }).then(() => {
			data.buildYourOwnGet("messages?_expand=user").then((messages) => {
				sessionStorage.setItem("messages", JSON.stringify(messages));
				displayMessages();
				displayMainMessages();
			});
		});
	}
};

const messageContainerClickHandler = () => {
	displayMainMessages();
	const mainButton = document.getElementById("mainButton")
	mainButton.innerText = "New Message"
	const buttonModalTitle = document.getElementById("nutshell-modal-title")
	buttonModalTitle.textContent = "New Message"
	const buttonModalBody = document.getElementById("nutshell-modal-body")
	buttonModalBody.innerHTML = messagesHtmlFactory.buildNewMessageForm()
	const buttonModalButtons = document.getElementById("nutshell-modal-footer")
	buttonModalButtons.innerHTML = messagesHtmlFactory.buildMessageFormButtons()
	document.getElementById("new-message-save").addEventListener("click", newMessageHandler)
};

export function attachMessagesEvents() {
	//add event listener to 'New Message' button
	// document.getElementById("send-message").addEventListener("click", newMessageHandler)
	document.getElementById("main-container").addEventListener("click", prevMessageButtonHandler);
	document.getElementById("messages-container").addEventListener("click", messageContainerClickHandler);
	document.querySelectorAll(".not-friend").forEach(friend => {
		friend.addEventListener("click", () => {
			const friendId = event.target.id.split("--")[1]
			//add friend using userId
			if (window.confirm("Would you like to add this person as a friend?")){
				data.createSomething("friends", {"userId": parseInt(friendId), "loggedInUser": userId})
				.then(r => {
					// GET updated friends list
					data.buildYourOwnGet(`friends?loggedInUser=${userId}&_expand=user`)
					.then(updatedFriendsArray => {
						// update session storage
						sessionStorage.setItem("friends", JSON.stringify(updatedFriendsArray))
						// render dom with new data
						refreshFriendsDisplay(updatedFriendsArray)
						displayMainMessages()
					})
				})
			}
		})
	})
}
