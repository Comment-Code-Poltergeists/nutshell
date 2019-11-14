rm api/database.json;
echo '{
  "users": [
    {
      "id": 1,
      "fullName": "Gandalf",
      "email": "youshallnotspam@example.com",
      "password": "123456"
    },
    {
      "id": 2,
      "fullName": "Bilbo",
      "email": "imgoingtospam@example.com",
      "password": "123457"
    },
    {
      "id": 3,
      "fullName": "Samwise",
      "email": "potatoes@example.com",
      "password": "123458"
    },
    {
      "id": 4,
      "fullName": "Sauron",
      "email": "iseeyou@mordor.gov",
      "password": "123459"
    }
  ],
  "articles": [
    {
      "id": 1,
      "userId": 1,
      "url": "url1.lotr.com",
      "title": "title, id: 1, userId: 1",
      "synopsis": "synopsis, id: 1, userId: 1",
      "timestamp": "2012-04-23T18:25:43.511Z"
    },
    {
      "id": 2,
      "userId": 1,
      "url": "url2.lotr.com",
      "title": "title, id: 2, userId: 1",
      "synopsis": "synopsis, id: 2, userId: 1",
      "timestamp": "2012-04-24T18:25:43.511Z"
    },
    {
      "id": 3,
      "userId": 2,
      "url": "url3.lotr.com",
      "title": "title, id: 3, userId: 2",
      "synopsis": "synopsis, id: 3, userId: 2",
      "timestamp": "2012-04-25T18:25:43.511Z"
    },
    {
      "id": 4,
      "userId": 3,
      "url": "url4.lotr.com",
      "title": "title, id: 4, userId: 3",
      "synopsis": "synopsis, id: 4, userId: 3",
      "timestamp": "2012-04-26T18:25:43.511Z"
    },
    {
      "id": 5,
      "userId": 3,
      "url": "url5.lotr.com",
      "title": "title, id: 5, userId: 3",
      "synopsis": "synopsis, id: 5, userId: 3",
      "timestamp": "2012-04-27T18:25:43.511Z"
    },
    {
      "id": 6,
      "userId": 3,
      "url": "url6.lotr.com",
      "title": "title, id: 6, userId: 3",
      "synopsis": "synopsis, id: 6, userId: 3",
      "timestamp": "2012-04-28T18:25:43.511Z"
    }
  ],
  "messages": [
    {
      "id": 1,
      "userId": 1,
      "message": "message, id: 1, userId: 1",
      "timestamp": "2012-04-25T18:25:43.511Z"
    },
    {
      "id": 2,
      "userId": 2,
      "message": "message, id: 2, userId: 2",
      "timestamp": "2012-04-26T18:25:43.511Z"
    },
    {
      "id": 3,
      "userId": 3,
      "message": "message, id: 3, userId: 3",
      "timestamp": "2012-04-27T18:25:43.511Z"
    },
    {
      "id": 4,
      "userId": 4,
      "message": "message, id: 4, userId: 4",
      "timestamp": "2012-04-28T18:25:43.511Z"
    }
  ],
  "events": [
    {
      "id": 1,
      "userId": 1,
      "eventName": "event name, id: 1, userId: 1",
      "eventDate": "2019-04-21",
      "location": "Nashville, TN"
    },
    {
      "id": 2,
      "userId": 4,
      "eventName": "event name, id: 2, userId: 4",
      "eventDate": "2019-04-22",
      "location": "Birmingham, AL"
    },
    {
      "id": 3,
      "userId": 4,
      "eventName": "event name, id: 3, userId: 4",
      "eventDate": "2019-04-23",
      "location": "Atlanta, GA"
    },
    {
      "id": 4,
      "userId": 3,
      "eventName": "event name, id: 4, userId: 3",
      "eventDate": "2019-04-24",
      "location": "Nashville, TN"
    }
  ],
  "tasks": [
    {
      "id": 1,
      "userId": 1,
      "task": "task, id: 1, userId: 1",
      "expectedCompletionDate": "2019-04-17",
      "isComplete": false
    },
    {
      "id": 2,
      "userId": 2,
      "task": "task, id: 2, userId: 2",
      "expectedCompletionDate": "2019-04-18",
      "isComplete": false
    },
    {
      "id": 3,
      "userId": 2,
      "task": "task, id: 3, userId: 2",
      "expectedCompletionDate": "2019-04-19",
      "isComplete": false
    },
    {
      "id": 4,
      "userId": 3,
      "task": "task, id: 4, userId: 3",
      "expectedCompletionDate": "2019-04-20",
      "isComplete": false
    },
    {
      "id": 5,
      "userId": 4,
      "task": "task, id: 5, userId: 4",
      "expectedCompletionDate": "2019-04-21",
      "isComplete": false
    }
  ],
  "friends": [
    {
      "id": 1,
      "userId": 1,
      "loggedInUser": 2
    },
    {
      "id": 2,
      "userId": 1,
      "loggedInUser": 3
    },
    {
      "id": 3,
      "userId": 2,
      "loggedInUser": 3
    },
    {
      "id": 4,
      "userId": 4,
      "loggedInUser": 1
    },
    {
      "id": 5,
      "userId": 3,
      "loggedInUser": 2
    },
    {
      "id": 6,
      "userId": 4,
      "loggedInUser": 3
    }
  ]
}' >> api/database.json