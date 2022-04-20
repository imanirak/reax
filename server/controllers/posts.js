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

//POST CONTROLLER
const db = require("../models")

const index = (req, res) => {
    db.Post.find().exec((err, allPosts) => {
        if (err) {
            return res.status(400).json({
                message: "Utter failure!",
                error: err,
            })
        }
        return res.status(200).json({
            message: "Success!",
            data: allPosts, 
        })
    })
}

const show = (req, res) => {
    db.Post.findById(req.params.id, (err, foundPost) => {
        if (err) {
            return res.status(400).json({
                message: "Utter failure!",
                error: err,
            })
        }
        return res.status(200).json({
            message: "Success!",
            data: foundPost, 
        })
    })
}

const create = (req, res) => {
    db.Post.create(req.body, (err, savedPost) => {
        if(err) {
            return res.status(400).json({
                message: "Utter failure!",
                error: err
            })
        }
        return res.status(201).json({
            message: "Success!",
            data: savedPost
        })
    })
}

const update = (req, res) => {
    db.Post.findByIdAndUpdate(
            req.params.id, 
            req.body,
            {new: true}, (err, updatedPost) => {
                if (err){
                    return res.status(400).json({
                        message: "Utter Failer!",
                        error: err,
                    })
                }
                return res.status(202).json({
                    message: "Success!",
                    data: updatedPost
                })
            })
}

const destroy = (req, res) => {
    db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
        if (err){
            return res.status(400).json({
                message: "Utter Failer!",
                error: err,
            })
        }
        return res.status(200).json({
            message: "Success!",
            data: deletedPost
        })
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}