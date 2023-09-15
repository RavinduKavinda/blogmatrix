import React, { useState } from 'react'
import profile from './../../assets/images/profile.png'
import { Link } from 'react-router-dom'
import { RiAccountCircleLine } from 'react-icons/ri'
import { IoCreateOutline, IoBagCheckOutline } from 'react-icons/io5'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiHelpCircle } from 'react-icons/fi'
import { BiLogOutCircle } from 'react-icons/bi'


export const User = () => {
  return (
    <>
        {/*-----User Profile-----*/}
        <div className="profile">
            <button className="img">
                <img src={profile} alt="Profile_Image" />
            </button>

            <div className="open__profile box__item">
              {/*dd profile info*/}
              <Link to='account'>
                <div className="image">
                  <div className="img">
                    <img src={profile} alt="Profile_Image" />
                  </div>
                  <div className="text">
                    <h5>Ravindu Kavinda</h5>
                    <p>Gampaha, SL</p>
                  </div>
                </div>
              </Link>

              <Link to='/create'>
                <button className="box ">
                  <IoCreateOutline  className='icon'/>
                  <h4>Create Post</h4>
                </button>
              </Link>

              <button className="box">
                <RiAccountCircleLine className='icon'/>
                <h4>My Account</h4>
              </button>

              <button className="box">
                <IoBagCheckOutline className='icon'/>
                <h4>My Order</h4>
              </button>

              <button className="box">
                <AiOutlineHeart className='icon'/>
                <h4>Wishlist</h4>
              </button>

              <button className="box">
                <FiHelpCircle className='icon'/>
                <h4>Help</h4>
              </button>

              <button className="box">
                <BiLogOutCircle className='icon'/>
                <h4>Log Out</h4>
              </button>

            </div>
        </div>
    </>
  )
}
