//Author: Sully, purpose: eventlistener functions

import { populateArticlesToMain } from "./ArticlesToMain";
import API from "../data/data.js"
import { populateArticleModule } from "./articles";
import { userId } from "../main";
export const articlesEventListener = () => {
document.getElementById("articles-container").addEventListener("click", () => {
    populateArticlesToMain();
})}

export const addMainEventListener = () => {
    const MainRef = document.getElementById("main-container");
    MainRef.addEventListener("click", (event) => {
        if(event.target.id.includes("edit-article")){
            console.log("edit that article!!")

        } else if(event.target.id.includes("delete-article")){
            const id = event.target.id.split("-")[2]
            API.deleteSomething(`articles/${id}`).then(() => {
                const friendsList = JSON.parse(sessionStorage.getItem("friends"))
                let Url = `articles?userId=${userId}`;
                friendsList.forEach(element => {
                    Url += `&userId=${element.user.id}`
                });
                API.buildYourOwnGet(Url).then((articlesArray) => {
                    sessionStorage.setItem("articles",JSON.stringify(articlesArray));
                    populateArticleModule();
                    populateArticlesToMain();
                })
            })
        }
    })
}