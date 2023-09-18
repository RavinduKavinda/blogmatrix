import React from 'react'
import {Link} from 'react-router-dom'
import login from './../../assets/images/login.png' 


export const Register = () => {
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
                        Register
                    </button>

                    <Link to = "/login">Log In</Link>
                </form>
            </div>
        </section>
    </>
  )
}