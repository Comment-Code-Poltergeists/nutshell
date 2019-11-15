//Author: Sully, purpose: a function to be called when the article section is clicked that will display all articles in main container
import { makeArticleCardMain, newArticleForm } from "./htmlMaker";
import { userId } from "../main";
import { createDateTimeToISO } from "../utilities/datetime";
import API from "../data/data.js"
import { updateDomArticles } from "./articles";

export const populateArticlesToMain = () => {
    const mainRef = document.getElementById("main-container")
    mainRef.innerHTML = "<h2>Articles</h2>"
    const articleArray = JSON.parse(sessionStorage.getItem("articles"))
    articleArray.forEach(element => {
        const newArt = makeArticleCardMain(element);
        mainRef.innerHTML += newArt;
        const cardRef = document.getElementById(`articleCard-${element.id}`)
        if (element.userId === userId) {
            cardRef.innerHTML += `<span class="task-buttons">
        <button class="btn btn-sm btn-warning" id="edit-article-${element.id}">✎</button>
        <button class="btn btn-sm btn-danger" id="delete-article-${element.id}">X</button>
        </span>`
            cardRef.classList.add("bg-secondary")
        } else {
            cardRef.classList.add("csbg")
        }
    });
    //functionality to add articles!!
    const bigButtonRef = document.getElementById("mainButton")
    bigButtonRef.innerText = "New Article"
    const modalHeaderRef = document.getElementById("nutshell-modal-title")
    modalHeaderRef.innerText = "New Article"
    const modalBodyRef = document.getElementById("nutshell-modal-body")
    modalBodyRef.innerHTML = newArticleForm();
    const modalFooterRef = document.getElementById("nutshell-modal-footer")
    modalFooterRef.innerHTML = `<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
<button type="button" class="btn btn-primary" id="saveNewArticle">Save changes</button>`
    document.getElementById("saveNewArticle").addEventListener("click", (event) => {
        const usersId = userId
        const url = document.getElementById("newArticleUrl").value
        const title = document.getElementById("newArticleTitle").value
        const synopsis = document.getElementById("newArticleSynopsis").value
        const timestamp = createDateTimeToISO();
        if (url === "") {
            window.alert("You have to enter a URL!")
        } else if (title === "") {
            window.alert("You have to enter a Title!")
        } else if (synopsis === "") {
            window.alert("You have to write a Synopsis!")
        } else {
            API.createSomething("articles", { "userId": usersId, url, title, synopsis, timestamp }).then(() => {
                updateDomArticles();
            })
        }

    })
}

