//Author: Sully, purpose: a function to be called when the article section is clicked that will display all articles in main container
import { makeArticleCardMain } from "./htmlMaker";
import { userId } from "../main";

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
    } else {
        cardRef.classList.add("csbg")
        console.log(cardRef.classList)
        
    }
});
}