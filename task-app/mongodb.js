const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5fd6abe2d9122e25f22734dc") 
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then( result => {
    //     console.log(result)
    // }).catch( error => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false, $set: { completed: true }
    // }).then( result => {
    //     console.log(result.modifiedCount)
    // }).catch( error => {
    //     console.log(error)
    // })

    db.collection('tasks')
        .deleteOne({ description: 'go shopping' })
        .then(  result => console.log(result.deletedCount))
        .catch( error  => console.log(error))
})