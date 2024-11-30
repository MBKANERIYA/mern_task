let jwt = require("jsonwebtoken")

module.exports.tokenVerify = (req, res, next) => {
    let token = req.headers["auth"]
    if (!token) {
        throw new Error("U R AUAUTHORIZE")
    }
    let deCodedtoken = token.split(" ")[1]
    jwt.verify(deCodedtoken, "mbk", (err, decode) => {
        if (err) {
            throw new Error("wrong token")
        }
        req.user = decode.user
        next()
    })
}

module.exports.isAdmin = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next()
    } else {
        throw new Error("you have no access")
    }
}