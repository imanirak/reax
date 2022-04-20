const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const db = require("../models");

const register = async (req, res) => {
    try{
        const foundUser = await db.User.findOne({email: req.body.email})

        if(foundUser){
            //exponential randomizaiton of a string (number) of times
            //the more salt, the longer it takes. 8-10 is the sweet spot!
            const salt = await bcrypt.genSalt(10)

            //hasing takes the salted password and gives it a different value
            //ex. "password" hashed may look something like "t5u3hhhhj2sune3u7" if its not properly salted
            //easy to decode! Not very safe, p = t5, a =u3, s=hh, etc
            const hash = await bcrypt.hash(req.body.password, salt)

            const updatedUser = await db.User.findByIdAndUpdate(
                {_id: foundUser._id},
                {
                    $set: {password: hash}
                },
                {new: true}
            )
            return res
                .status(201)
                .json({status: 201, message: "SUCCESS!!", updatedUser})
        }
        return res
            .status(400)
            .json({status: 400, message: "Email address is incorrect or not in the database."})

    } catch(err) {
        return res.status(500).json({
            status: 500,
            errorMsg: err,
            message: "Site broke or something oops. Try again."
        })
    }
}

const login = async (req, res) => {
    try {
        const foundUser = await db.User.findOne({email: req.body.email}).select("+password")

        if(!foundUser) {
            return res
                .status(400).json({status: 400, message: "Email or password is wrong, Homie :((("})
        }

        //take the user input first, then compare the hased password next. returns true or false
        const isMatch = await bcrypt.compare(req.body.password, foundUser.password)
        //if the password matches
        if (isMatch) {
            const token = jwt.sign({_id: foundUser._id}, "hailsatan", {expiresIn: "3h"})
            return res.status(200).json({
                status: 200,
                message: "GREAT SUCCESS!",
                token
            })
        } else {
            return res
                .status(400).json({status: 400, message: "Email or password is wrong, Homie :((("})
        }

    } catch(err) {
        return res.status(500).json({
            status: 500,
            errorMsg: err,
            message: "Site broke or something oops. Try again."
        })
    }
}

module.exports = {
    register,
    login
}