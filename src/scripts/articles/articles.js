//Author: Sully, Purpose: putting everything together for one function to be called in main
import { makeArticleCard } from "./htmlMaker";
import { articlesEventListener, addMainEventListener } from "./eventListeners";
import { userId } from "../main.js"
import API from "../data/data.js"
import { populateArticlesToMain } from "./ArticlesToMain";
import {sortElementsByDate} from "../utilities/datetime.js"

export const populateArticleModule = () => {
    const containerRef = document.getElementById("articles-content")
    containerRef.innerHTML = ""
    if (JSON.parse(sessionStorage.getItem("articles")) !== null) {
        let data = JSON.parse(sessionStorage.getItem("articles"))
        data.forEach(element => {
            const newArt = makeArticleCard(element);
            containerRef.innerHTML += newArt
            const cardRef = document.getElementById(`articlecard-${element.id}`)
            if (element.userId === userId) {
                cardRef.classList.add("bg-secondary")
            } else {
                cardRef.classList.add("csbg")

            }
        });
    } else {
        console.log("nothing in session storage!")
        buildYourOwnGet("friends").then((friendsList) => {
            let Url = `articles?userId=${userId}`;
            friendsList.forEach(element => {
                Url += `&userId=${element.user.id}`
            });
            API.buildYourOwnGet(Url).then((articlesArray) => {
                sessionStorage.setItem("articles", JSON.stringify(articlesArray));
                articlesArray.forEach(element => {
                    const newArt = makeArticleCard(element);
                    containerRef.innerHTML += newArt
                    const cardRef = document.getElementById(`articlecard-${element.id}`)
                    if (element.userId === userId) {
                        cardRef.classList.add("bg-secondary")
                    } else {
                        cardRef.classList.add("csbg")
                    }
                })
            })
            articlesEventListener()
        })
    }
}

//update the articles shown on the dom in both main and the articles section
export const updateDomArticles = () => {
    const friendsList = JSON.parse(sessionStorage.getItem("friends"))
    let Url = `articles?userId=${userId}`;
    friendsList.forEach(element => {
        Url += `&userId=${element.user.id}`
    });
    API.buildYourOwnGet(Url).then((articlesArray) => {
        sessionStorage.setItem("articles", JSON.stringify(articlesArray));
        populateArticleModule();
        populateArticlesToMain();
    })
}

