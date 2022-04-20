
const path = require("path")
require("dotenv").config({path: "../.env"})

// **** External modules
const express = require("express");
const cors = require("cors")

//***** Internal Modules



//**** Instanced Modules
const app = express();
const routes = require("./routes");

//****Configs
const config = require('@reax/config');


//****middleware
app.use(express.static(path.join("build")))
// //this helps us read the body, req.body also works with Postman
app.use(express.urlencoded({extended: true}))

app.use(express.json())
app.use(cors())


/* ====  Routes & Controllers  ==== */
app.use("/api", routes)

app.all("/api/*", (req, res, next) => {
 	res.send("HOLD UP THESE ARE NOT THE APIS YOU ARE LOOKING FOR")
 })




//****server listener
app.listen(config.PORT, () => {
    console.log(`reax is live! *** live at http://localhost:${config.PORT}`)
})