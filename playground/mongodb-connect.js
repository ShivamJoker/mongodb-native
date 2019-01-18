// const MongoClient = require('mongodb').MongoClient;

const {
    MongoClient,
    ObjectID
} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server ' + err);
    }

    console.log('Connected to database');
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({

    //     text: "I need something to do",
    //     completed: false

    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));

    // })


    // db.collection('Users').insertOne({

    //     name: "Mr Horse",
    //     age: 40,
    //     location: 'India'

    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));

    // })

    client.close();
})