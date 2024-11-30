const { userService } = require("../services")
const bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken")

module.exports.register = async (req, res) => {
    try {
        let body = req.body
        let duplicate = await userService.findByEmail(body.email)
        if (duplicate) {
            throw new Error("USER ALREADY EXISTING")
        }
        let user = await userService.createUser(body)
        res.status(201).json({
            message: "USER REGISTERED SUCCESSFULLY",
            user
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}

module.exports.getUsers = async (req, res) => {
    try {
        let user = await userService.getAllUsers()
        res.status(200).json({
            message: "GET ALL USERS SUCCESSFULLY",
            user
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}

module.exports.login = async (req, res) => {
    try {
        let { email, password } = req.body

        let user = await userService.findByEmail(email)
        if (!user) {
            throw new Error("u r not registered")
        }
        let validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) {
            throw new Error("enter valid password")
        }
        let token = jwt.sign({ user }, "mbk", { expiresIn: "1d" })

        res.status(200).json({
            message: "U R LOGIN SUCCESSFULLY",
            token,
            user
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}


module.exports.deleteUser = async (req, res) => {
    try {
        let { id } = req.params
        let user = await userService.findByIdAndDelete(id)
        res.status(200).json({
            message: "USER DELETE SUCCESSFULLY",
            user
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}
