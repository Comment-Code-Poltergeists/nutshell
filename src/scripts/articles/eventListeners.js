//Author: Sully, purpose: eventlistener functions

import { populateArticlesToMain } from "./ArticlesToMain";
import API from "../data/data.js"
import { populateArticleModule } from "./articles";
import { userId } from "../main";
import { articleForm } from "./htmlMaker";
import {updateDomArticles} from "./articles.js"
import { createDateTimeToISO } from "../utilities/datetime";

//set an event listener on the articles section
export const articlesEventListener = () => {
document.getElementById("articles-container").addEventListener("click", () => {
    populateArticlesToMain();
})}


//set an event listener on the main container
export const addArticleEventListeners = () => {
    const MainRef = document.getElementById("main-container");
    MainRef.addEventListener("click", (event) => {
        //logic for what happens when you click the edit button
        if(event.target.id.includes("edit-article")){
            const id = event.target.id.split("-")[2]
            const cardRef = document.getElementById(`articleCard-${id}`)
            cardRef.innerHTML = articleForm(id);
            API.buildYourOwnGet(`articles/${id}`).then((articleObj) => {
                document.getElementById(`articleTitle-${id}`).value = articleObj.title
                document.getElementById(`articleUrl-${id}`).value = articleObj.url
                document.getElementById(`articleSynopsis-${id}`).value = articleObj.synopsis
            })
            //logic for what happens when you click the delete button
        } else if(event.target.id.includes("delete-article")){
            const id = event.target.id.split("-")[2]
            API.deleteSomething(`articles/${id}`).then(() => {
                updateDomArticles();
            })
            //logic for saving an article after clicking the save button
        } else if (event.target.id.includes("save-article")) {
            const id = event.target.id.split("-")[2];
            const title = document.getElementById(`articleTitle-${id}`).value
            const url = document.getElementById(`articleUrl-${id}`).value
            const synopsis = document.getElementById(`articleSynopsis-${id}`).value
            const timestamp = createDateTimeToISO()
            API.patchSomething(`articles/${id}`, {title, url, synopsis, timestamp}).then(updateDomArticles)
            
        }
    })
    // const bigButtonRef = document.getElementById("mainButton")
    // bigButtonRef.addEventListener("click", () => {
    //     if (bigButtonRef.innerText === "New Article") {
    //         console.log("lets make a new article!")
    //     }
    // })
}

