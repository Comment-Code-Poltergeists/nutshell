import { makeArticleCard } from "./htmlMaker";

export const populateArticleModule = (articleArray) => {
const containerRef = document.getElementById("articles-content")
articleArray.forEach(element => {
    const newArt = makeArticleCard(element);
    containerRef.innerHTML += newArt
});
}