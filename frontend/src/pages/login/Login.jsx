import React from 'react'
import './login.css'
import image from '../../assets/images/profile.png'

export const Login = () => {
  return (
    <>
    <section className="account__info">
        <div className="container box__item">
            <h1>Account Information</h1>

            <div className="content">

                <div className="left">
                    <div className="img flex__center">
                        <input type="file" src= {image} alt='image'/>
                        <img src={image} alt="Profile_Image" />
                    </div>
                </div>

                <div className="right">
                    <label htmlFor="">Username :</label>
                    <input type="text" />

                    <label htmlFor="">Email :</label>
                    <input type="text" />

                    <label htmlFor="">Password :</label>
                    <input type="password" />

                    <button className="button">Update</button>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}
