//Author: Sully, Purpose: putting everything together for one function to be called in main
import { makeArticleCard } from "./htmlMaker";
import { articlesEventListener, addMainEventListener } from "./eventListeners";

export const populateArticleModule = () => {
const containerRef = document.getElementById("articles-content")
containerRef.innerHTML = ""
let data = JSON.parse(sessionStorage.getItem("articles"))
data.forEach(element => {
    const newArt = makeArticleCard(element);
    containerRef.innerHTML += newArt
});
articlesEventListener();
}