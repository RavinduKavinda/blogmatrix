import React from 'react'
import './create.css'
import profile from './../../assets/images/profile.png'

export const Create = () => {
  return (
    <>
        <section className="new__post">
            <div className="container box__item">
                <div className="img">
                    <img src={profile} alt="" />
                </div>

                <form>
                    <div className="input__file flex__center">
                        <input type="file" />
                    </div>
                </form>
            </div>
        </section>
    </>
  )
}
