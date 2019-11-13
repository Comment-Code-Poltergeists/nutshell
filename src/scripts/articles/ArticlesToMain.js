import { makeArticleCardMain } from "./htmlMaker";

export const populateArticlesToMain = () => {
const mainRef = document.getElementById("main-content")
const articleArray = JSON.parse(sessionStorage.getItem("articles"))
articleArray.forEach(element => {
    const newArt = makeArticleCardMain(element);
    mainRef.innerHTML += newArt;
});
}