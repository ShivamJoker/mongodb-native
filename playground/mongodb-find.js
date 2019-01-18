// const MongoClient = require('mongodb').MongoClient;

const {
    MongoClient,
    ObjectID
} = require('mongodb');

var obj = new ObjectID();

console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server ' + err);
    }

    console.log('Connected to database');
    const db = client.db('TodoApp')

    // db.collection('Todos').find({
    //     completed: false
    // }).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));


    // }, (err) => {
    //     console.log("unable to fetch todos", err);

    // })



    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    //     console.log(JSON.stringify(docs, undefined, 2));


    // }, (err) => {
    //     console.log("unable to fetch todos", err);

    // })


    // finding all users  with name of Mr Horse

    db.collection('Users').find({
        name: 'Mr Horse'
    }).toArray().then((docs) => {
        console.log("Users");
        console.log(JSON.stringify(docs, undefined, 2));


    }, (err) => {
        console.log("unable to fetch todos", err);

    })


    // client.close();
})