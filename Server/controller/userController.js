
const mysqlConnection = require("../dbconfig")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const { StatusCodes } = require("http-status-codes")

async function register(req, res) {
    const { userid, username, firstName, lastName, email, password } = req.body;
    if (!userid || !email || !password || !firstName || !lastName || !username) {
        return res.status(400).json({ msg: "please fill all and register" })
    }
    try {

        const [user] = await mysqlConnection.query("SELECT username, userid from USERRS where username=? or email=? ", [username, email])
        if (user.length > 0) {
            return res.status(400).json({ msg: "already registered " })
        }
        if (password.length < 5) {
            return res.status(400).json({ msg: "password must be greater than 5" })
        }

        //encrypt password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        await mysqlConnection.query("INSERT INTO USERRS (userid, username, firstName, lastName, email, password) VALUES (?,?,?,?,?,?)", [userid, username, firstName,
            lastName, email, hashedPassword]);
        return res.status(201).json({ msg: "user created" })
    } catch (error) {
        console.log(error.message)
    }
    return res.status(500).json({ msg: "something went wrong try again latter!" })
};

async function login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "please fill all and login" })
    }
    try {
        const [user] = await mysqlConnection.query("SELECT username, userid, password from USERRS where email=? ", [email])
        if (user.length == 0) {
            return res.status(StatusCodes.BAD_REQUEST).json({ msg: "invalid" })

        }

        //compare password
        const isMatch = await bcrypt.compare(password, user[0].password);
        if (!isMatch) {
            return res.status(StatusCodes.BAD_REQUEST).json({ msg: "invalid user" });
        }

        const username = user[0].username
        const userid = user[0].userid;
        const token = jwt.sign({ username, userid }, process.env.JWT_SECRET, { expiresIn: "1d" })
        return res.status(StatusCodes.OK).json({ msg: "user login successfully", token, username })

    } catch (error) {
        console.log(error.message)
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "something went wrong trry again latter!" })
};

async function checkUser(req, res) {
    const username = req.user.username
    const userid = req.user.userid
    res.status(StatusCodes.OK).json({ msg: "valid user", username, userid })
};

module.exports = { register, login, checkUser };