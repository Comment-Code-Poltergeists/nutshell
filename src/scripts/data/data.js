//authors:  Sullivan, Ken, Chase
//purpose:  generic fetch functions for everyone to use

const baseUrl = "http://localhost:8088"

export default {
    fetchFriendsList: (userId) => {
        return fetch(`${baseUrl}/friends?loggedInUser=${userId}&_expand=user`)
            .then(jsonData => jsonData.json())
    },

    fetchEverything: function (userId) {
        return this.fetchFriendsList(userId)
        //first fetch, getting all of your friends
            .then(friendObjs => {
                let IdArray = []
                friendObjs.forEach(element => {
                    IdArray.push(element.id)
                });
                let fetchArticlesUrl = `${baseUrl}/articles?userId=${userId}`
                let fetchEventsUrl = `${baseUrl}/events?userId=${userId}`
                //building the urls to use for getting all the articles and events
                IdArray.forEach(id => {
                    fetchArticlesUrl += `&userId=${id}`
                    fetchEventsUrl += `&userId=${id}`
                })
                //fetch your friends articles and yours
                fetch(fetchArticlesUrl).then(data => data.json())
                    .then(articlesArray => {
                        //fetch your friends events and yours
                        fetch(fetchEventsUrl)
                            .then(data => data.json())
                            .then(eventsArray => {
                                //fetch all messages
                                fetch(`${baseUrl}/messages`).then(data => data.json())
                                    .then(messagesArray => {
                                        fetch(`${baseUrl}/tasks/?userId=${userId}`).then(data => data.json())
                                        //save everything to session storage
                                            .then(tasksArray => {
                                                sessionStorage.setItem("friends", JSON.stringify(friendObjs));
                                                sessionStorage.setItem("articles", JSON.stringify(articlesArray));
                                                sessionStorage.setItem("events", JSON.stringify(eventsArray));
                                                sessionStorage.setItem("messages", JSON.stringify(messagesArray));
                                                sessionStorage.setItem("tasks", JSON.stringify(tasksArray));
                                            })

                                    })
                            })
                    })
            }
            )
    },

    buildYourOwnGet: function(endUrl) {
        return fetch(`${baseUrl}/${endUrl}`).then(data => data.json())
    },

    patchSomething: function(endUrl, newObj) {
        return fetch(`${baseUrl}/${endUrl}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObj)
        })
    },

    deleteSomething: function(endUrl) {
        return fetch(`${baseUrl}/${endUrl}`, {
            method: "Delete"
        })
    },

    createSomething: function(endUrl, newObj) {
        return fetch(`${baseUrl}/${endUrl}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObj)
        })
    }


}