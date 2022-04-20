// **** External modules
const express = require("express");
require("dotenv").config({path: "../.env"})

const cors = require("cors")

//***** Internal Modules



//**** Instanced Modules
const app = express();


//****Configs
const config = require('@reax/config');
const routes = require("./routes");

//****middleware
app.use(express.static(path.join("build")))
// //this helps us read the body, req.body also works with Postman
app.use(express.urlencoded({extended: true}))
// //parse some json :)))
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