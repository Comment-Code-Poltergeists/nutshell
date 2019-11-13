import { populateArticlesToMain } from "./ArticlesToMain";
export const articlesEventListener = () => {
document.getElementById("articles-container").addEventListener("click", () => {
    populateArticlesToMain();
})}