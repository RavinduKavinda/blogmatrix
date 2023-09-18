import React from 'react'
import './login.css'
import login from './../../assets/images/login.png'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <>
    <section className="login">
        <div className="container">
            <div className="login__img">
                <img src={login} alt="" />
                <div className="text">
                    <h3>Login</h3>
                    <h1>My Account</h1>
                </div>
            </div>

            {/* Login Details */}
            <form>
                <span>Username or Email address*</span>
                <input type="text" required />

                <span>Password*</span>
                <input type="password" required />

                <button className="button">
                    Log In
                </button>

                <Link to = "/register">Register</Link>
            </form>
        </div>
    </section>
    </>
  )
}
