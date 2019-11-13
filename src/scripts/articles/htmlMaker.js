//Author: Sully, Purpose: functions to create  article cards for the article module and expansion to main

export const makeArticleCard = (articleObj) => {
    return `<div class="card bg-secondary border-dark" id="articlecard-${articleObj.userId}"
    <h3 class="card-title" id="article-title-${articleObj.userId}">${articleObj.title}</h3>
    <p id="article-url-${articleObj.userId}"><a href="${articleObj.url}">Link Here</a></p>
    <p id="article-synopsis-${articleObj.userId}">${articleObj.synopsis}</p>
    </div>`
}

export const makeArticleCardMain = (articleObj) => {
    return `<div class="card bg-secondary border-dark" id="articlecard-${articleObj.id}"
    <h3 class="card-title" id="article-title-${articleObj.id}">${articleObj.title}</h3>
    <p id="article-url-${articleObj.id}"><a href="${articleObj.url}">Link Here</a></p>
    <p id="article-synopsis-${articleObj.id}">${articleObj.synopsis}</p>
    <button id="edit-article-${articleObj.id}">Edit</button>
    <button id="delete-article-${articleObj.id}">Delete</button>
    </div>`
}
export const articleForm = () => {
    return
}