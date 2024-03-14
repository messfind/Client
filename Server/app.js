require("dotenv").config()
const express = require("express")
const app = express();

const cors = require("cors")
app.use(cors())

app.use(express.json());


app.use(express.urlencoded({
    extended: true,
}))
//db connection
const mysqlConnection = require("./dbconfig")

//user route middleware file
const userRoute = require("./route/userRoute")

const questionRoutes = require("./route/question");

//authentication middleware
const authMiddleware = require("./middleware/authMiddleware");

//json middleware to extract json data
app.use(express.json())

//user route middleware
app.use("/api/users", userRoute)



//questions route middleware
app.use("/api/questions", authMiddleware, questionRoutes)


//answers route middleware

async function start() {
    try {
        const result = await mysqlConnection.execute("select'test'")
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}

start()


const port = 4040
app.listen(port, (err) => {
    if (err) {
        console.log(err.message);
    } else { console.log(`listen on ${port}`) }

});