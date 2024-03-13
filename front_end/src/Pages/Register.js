import { Link, useNavigate } from "react-router-dom"
import { useRef } from "react"
import axios from "../axiosConfig"
import classes from "./register.module.css"

function Register() {
    const navigate = useNavigate()

    const useridDom = useRef()
    const usernameDom = useRef()
    const firstNameDom = useRef()
    const lastNameDom = useRef()
    const emailDom = useRef()
    const passwordDom = useRef()
    async function handleSubmit(e) {
        e.preventDefault();

        const useridValue = useridDom.current.value;
        const usernameValue = usernameDom.current.value;
        const firstNameValue = firstNameDom.current.value
        const lastNameValue = lastNameDom.current.value;
        const emailValue = emailDom.current.value;
        const passwordValue = passwordDom.current.value
        if (
            !useridValue ||
            !usernameValue ||
            !firstNameValue ||
            !lastNameValue ||
            !emailValue ||
            !passwordValue
        ) {
            alert("please provide all")
            return;
        }

        try {
            await axios.post("http://localhost:4040/api/users/register", {
                userid: useridValue,
                username: usernameValue,
                firstName: firstNameValue,
                lastName: lastNameValue,
                email: emailValue,
                password: passwordValue,
            });
            alert("register success")
            navigate("/login")
        } catch (error) {
            alert("Something wrong")
            console.log(error.response)
        }

    }
    return (
        
        <section className={classes.register}>
            <div className={classes.register_container}>
            <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <span>userid</span>
                        <input ref={useridDom} type="number" placeholder="userid" />
                    </div>
                    <div>
                        <span>username</span>
                        <input ref={usernameDom} type="text" placeholder="username" />
                    </div>
                    <div>
                        <span>firstName</span>
                        <input ref={firstNameDom} type="text" placeholder="firstName" />
                    </div>
                    <div>
                        <span> lastName</span>
                        <input ref={lastNameDom} type="text" placeholder=" lastName" />
                    </div>
                    <div>
                        <span>email</span>
                        <input ref={emailDom} type="email" placeholder="email" />
                    </div>
                    <div>
                        <span>password</span>
                        <input ref={passwordDom} type="password" placeholder="password" />
                    </div>
                    <button type="submit" className={classes.btn_dark} id="newFormBtn">Register</button>
                </form>
                <p>please create your account here!</p>
                <button className={classes.login}><Link to={"/login"} >Sign In </Link></button>
                </div>
               
            </section>
       
    )
}

export default Register