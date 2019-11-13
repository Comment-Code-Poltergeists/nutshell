export const makeArticleCard = (articleObj) => {
    return `<div class="card bg-secondary border-dark" id="articlecard-${articleObj.userId}"
    <h3 class="card-title" id="article-title-${articleObj.userId}">${articleObj.title}</h3>
    <p id="article-url-${articleObj.userId}"><a href="${articleObj.url}">Link Here</a></p>
    <p id="article-synopsis-${articleObj.userId}">${articleObj.synopsis}</p>
    </div>`
}

export const makeArticleCardMain = (articleObj) => {
    return `<div class="card bg-secondary border-dark" id="articlecard-${articleObj.userId}"
    <h3 class="card-title" id="article-title-${articleObj.userId}">${articleObj.title}</h3>
    <p id="article-url-${articleObj.userId}"><a href="${articleObj.url}">Link Here</a></p>
    <p id="article-synopsis-${articleObj.userId}">${articleObj.synopsis}</p>
    <button id="edit-article">Edit</button>
    <button id="delete-article">Delete</button>
    </div>`
}