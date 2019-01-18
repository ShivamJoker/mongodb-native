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

//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID("5c416a6cd64f05dffdac25fa")
//    },{
//        $set:{
//            completed: true
//        }
//     },
//        {
//            returnOriginal: false
//        })
//        .then((result)=>{
//            console.log(result);
           
//        })


db.collection('Users').findOneAndUpdate({
    name: 'Shivam'
},{
    $set:{
        name: 'Shivam',
       
    },
    $inc:{
        age: 5
    }
 },
    {
        returnOriginal: false
    })
    .then((result)=>{
        console.log(result);
        
    })
    // client.close();
})