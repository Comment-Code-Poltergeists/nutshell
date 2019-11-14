//Author: Sully, Purpose: functions to create  article cards for the article module and expansion to main

export const makeArticleCard = (articleObj) => {
    return `<div class="card bg-secondary border-dark" id="articlecard-${articleObj.userId}"
    <h3 class="card-title" id="article-title">${articleObj.title}</h3>
    <p id="article-url"><a href="${articleObj.url}">Link Here</a></p>
    <p id="article-synopsis">${articleObj.synopsis}</p>
    </div>
    <br>`
}

export const makeArticleCardMain = (articleObj) => {
    return `<div class="card bg-secondary border-dark" id="articleCard-${articleObj.id}">
    <h3 class="card-title" id="article-title-${articleObj.id}">${articleObj.title}</h3>
    <p id="article-url-${articleObj.id}"><a href="${articleObj.url}">Link Here</a></p>
    <p id="article-synopsis-${articleObj.id}">${articleObj.synopsis}</p>
    </div>
    <br>`
}
export const articleForm = (id) => {
    return `<div><fieldset>
    <div class="form-group"
    <label for="articleTitle">Title</label>
    <input class="form-control" id="articleTitle-${id}" type="text">
    </div>
    <div class="form-group"
    <label for="articleUrl">URL</label>
    <input class="form-control" id="articleUrl-${id}" type="text">
    </div>
    <div class="form-group"
    <label for="articleSynopsis">Synopsis</label>
    <input class="form-control" id="articleSynopsis-${id}" type="text">
    </div>
  </fieldset>
  <button class="btn btn-primary" id="save-article-${id}"> Save </button>
  </div>`
}