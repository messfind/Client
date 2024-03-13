
import { Link, useNavigate } from "react-router-dom"
import { useRef } from "react"
import axios from "../axiosConfig"
// import { useJwt } from "react-jwt"
import classes from "./login.module.css"
function Login() {
    // const token = useJwt()
    const navigate = useNavigate()

    const emailDom = useRef()
    const passwordDom = useRef()

    async function handleSubmit(e) {
        e.preventDefault();
        const emailValue = emailDom.current.value;
        const passwordValue = passwordDom.current.value
        if (
            !emailValue ||
            !passwordValue
        ) {
            alert("please provide all")
            return;
        }
        try {
            const { data } = await axios.post("http://localhost:4040/api/users/login", {
                email: emailValue,
                password: passwordValue,
            });
            alert("login success")
            localStorage.setItem("token", data.token);
            navigate("/")
            console.log(data)
        } catch (error) {
            alert("Something wrong")
            console.log(error.response)
        }
    }

    return (
        <section className={classes.login}>
            <div className={classes.login_container}>
                <form onSubmit={handleSubmit}>
                    <h1>Sign In</h1>
                <div>
                    <span>email</span>
                    <input ref={emailDom} type="email" placeholder="email" />
                </div>
                
                <div>
                    <span>password</span>
                    <input ref={passwordDom} type="password" placeholder="password" />
                </div>
            
                <button type="submit" className={classes.btn_dark} id="newFormBtn">Login</button>
                </form>
                <p>Well come! our pages.If you have not an account please create your account</p>
                <button className={classes.register}> <Link to={"/register"} >register </Link></button>
            </div>
        </section>
    )
}

export default Login