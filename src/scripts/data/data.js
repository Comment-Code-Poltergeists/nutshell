const baseUrl = "http://localhost:8088"

export default {
    fetchFriendsList: (userId) => {
        return fetch(`${baseUrl}/friends?loggedInUser=${userId}&_expand=user`)
            .then(jsonData => jsonData.json())
    },

    fetchEverything: function (userId) {
        return this.fetchFriendsList(userId)
            .then(friendObjs => {
                console.log(friendObjs)
                let IdArray = []
                friendObjs.forEach(element => {
                    IdArray.push(element.id)

                });
                console.log(IdArray)
                let fetchArticlesUrl = `${baseUrl}/articles?userId=${userId}`
                let fetchEventsUrl = `${baseUrl}/events?userId=${userId}`
                IdArray.forEach(id => {
                    fetchArticlesUrl += `&userId=${id}`
                    fetchEventsUrl += `&userId=${id}`
                })
                console.log(fetchEventsUrl)
                fetch(fetchArticlesUrl).then(data => data.json())
                    .then(articlesArray => {
                        fetch(fetchEventsUrl)
                            .then(data => data.json())
                            .then(eventsArray => {
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
        fetch(`${baseUrl}/${endUrl}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObj)
        })
    },

    deleteSomething: function(endUrl) {
        fetch(`${baseUrl}/${endUrl}`, {
            method: "Delete"
        })
    },

    createSomething: function(endUrl, newObj) {
        fetch(`${baseUrl}/${endUrl}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObj)
        })
    }


}