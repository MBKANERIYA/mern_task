require("dotenv").config()
let express = require("express")
let bodyParser = require("body-parser")
const cors = require("cors")
let http = require("http")
const { dbConnect } = require("./config/dbConnect")
const routes = require("./routes")

let app = express()
app.use(bodyParser.json())
dbConnect()
app.use(cors({
    origin: '*'
}))
app.use("/v1", routes)

http.createServer(app).listen(process.env.PORT, () => {
    console.log(`SERVER STARTED SUCCESSFULLY ON ${process.env.PORT}`);
})