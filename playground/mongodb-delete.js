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

    // delete many

    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // })

    // delete one

    // db.collection('Todos').deleteOne({
    //     text: 'I need something to do'
    // }).then((result) => {
    //     console.log(result);
    // })

    // findOne and delete

    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // })


    db.collection('Users').deleteMany({
        name: 'Mr Horse'
    }).then((result) => {
        console.log(result);
    })

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5c416638d64f05dffdac24db")
    }).then((result) => {
        console.log(result);
    })

    // client.close();
})