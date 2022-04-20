const db = require("../models")

// Rest Routes
/*
 * Index - GET - /comment  - Presentational - respond with all comment
 * New - GET - /comment/new  - Presentational Form - a page with a form to create a new comment
 * Show - GET - /comment/:id  - Presentational - respond with specific comment by id
 * Create - Post - /comment  - Functional - recieve data from new route to create a comment
 * Edit - GET - /comment/:id/edit  - Presentational Form - respond with a form prefilled with comment data
 * Update - PUT - /comment/:id  - Functional - recieve data from edit to update a specific comment
 * Delete - DELETE - /comment/:id  - Functional - Deletes comment by id from request
 */ 

const index = (req, res) => {
    db.User.find()
        .exec((err, allUsers) => {
            return res.status(200).json({
                message: "Success!",
                data: allUsers
            })
        })
}

const show = async (req, res) => {
    try{
        const foundUser = await db.User.findById(req.userId)
        return res.status(200).json({
            message: "HUZZUH",
            data: foundUser
        })
    } catch(err) {
        console.log(err)
        return res
            .status(500)
            .json({status: 500, message: "Interal Error. Oopsie doodle :((("})
    }
}

module.exports = {
    index, 
    show
}