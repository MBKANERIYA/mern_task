const bcrypt = require("bcrypt")
const { userSchema } = require("../models")

module.exports.createUser = async (body) => {
    let { password } = body

    const hashPassword = await bcrypt.hash(password, 10)

    let newBody = {
        ...body,
        password: hashPassword
    }
    return userSchema.create(newBody)
}

module.exports.findByEmail = (email) => {
    return userSchema.findOne({ email })
}

module.exports.getAllUsers = () => {
    return userSchema.find()
}

module.exports.findByIdAndDelete = (id) => {
    return userSchema.findByIdAndDelete(id)
}
