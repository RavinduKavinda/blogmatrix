import React from 'react'
import profile from './../../assets/images/profile.png'

export const User = () => {
  return (
    <>
        {/*-----User Profile-----*/}
        <div className="profile">
            <button className="img">
                <img src={profile} alt="Profile_Image" width='40px' />
            </button>
        </div>
    </>
  )
}
