const mongoose = require("mongoose");
const db = mongoose.connection;
const dbUrl = process.env.MONGO_URL;

mongoose
.connect(dbUrl)
.then(() => {
 console.log (`MONGO MONGO! at ${db.host}: ${db.port}! WOO! `)
})
.catch((err) => console.log(`mongo is dead. ${err}`))

module.exports = {
    User: require('./User'),
    Comment: require("./Comment"),
    Event: require("./Event"),
    Community: require('./Community'),
    Post: require('./Post')
}