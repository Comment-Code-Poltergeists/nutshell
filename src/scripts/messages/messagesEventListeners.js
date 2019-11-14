/*
Purpose: attach/handle event listeners to the 'messages' DOM elements
Author: Ryan Bishop
 */
import API from "../data/data.js";
import { createDateTimeToISO } from "../utilities/datetime.js";
import { displayMessages, displayMainMessages } from "./messages.js";
import data from "../data/data.js";

//get logged-in user
const userId = JSON.parse(sessionStorage.getItem("userId"));

const newMessageHandler = () => {
	const message = document.getElementById("new-message").value;
	const timestamp = createDateTimeToISO();
	console.log("messageObj", { userId, message, timestamp });
	// TODO: POST request to database.json /messages and re-render DOM
	API.createSomething("messages", { userId, message, timestamp }).then(displayMessages);
};

const updateMessageInputfield = (event, messageObj) => {
	const messageContainer = document.getElementById(`main-message--${messageObj.id}`);
	// const inputField = document.createElement("input")
	// inputField.id = `edited-message--${messageObj.id}`
	// inputField.type = "text"
	// const saveButton = document.createElement("button")
	// saveButton.id = `update-message--${messageObj.id}`
	// saveButton.class = "btn"
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
        console.log("deleting message", messageId)
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
	console.log("clicked the messages container");
	displayMainMessages();
	const mainContainer = document.getElementById("main-container");
	console.log(mainContainer);
};

export function attachMessagesEvents() {
	//add event listener to 'New Message' button
	// document.getElementById("send-message").addEventListener("click", newMessageHandler)
	document.getElementById("main-container").addEventListener("click", prevMessageButtonHandler);
	document.getElementById("messages-container").addEventListener("click", messageContainerClickHandler);
}
