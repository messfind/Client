const express = require('express')
const router = express.Router()

//authentication middleware
const authMiddleware = require("../middleware/authMiddleware")

router.get("/all_questions", authMiddleware, (req, res) => {
    res.send("all question here")
});

module.exports = router