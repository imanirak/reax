//need dotenv here since we aren't accessing our server.js AT ALL
require("dotenv").config()
console.log(require("dotenv").config())

//bring in the db connection
const db = require("../models");

//fs stands for file system and it lets us read, write, delete anything we need to manipulate files in our Node.js application!
const fs = require("fs");



//we need readFileSync to read the file and parse the JSON to something more easily manipulated
//we also need to pass in the file path for readFileSync
const userSeeds = JSON.parse(
    fs.readFileSync(`${__dirname}/users.json`)
)


//try/catch is a bit like if/else but easier to distinguish errors with
//its also common in testing!
const seedUsers = async () => {
    try {
        await db.User.create(userSeeds);
        console.log("Data created!")
    }catch(err) {
        console.log(err)
    }
}


//THIS WILL DELETE EVERYTHING INSIDE YOUR USER COLLECTION
const deleteUsers = async () => {
    try{
        await db.User.deleteMany();
        console.log("Data destoryed!")
    } catch(err) {
        console.log(err)
    }
}

seedUsers()
deleteUsers()

module.exports = {
    usersJSON: require("./users.json")
}