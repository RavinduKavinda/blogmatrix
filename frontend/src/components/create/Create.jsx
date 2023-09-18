import React from 'react'
import './create.css'
import profile from './../../assets/images/blogs/blog.png'

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

                    <input type="text" placeholder='Title' />
                    <textarea name="" id="" cols="30" rows="10" ></textarea>
                    <button>Create Post</button>
                </form>
            </div>
        </section>
    </>
  )
}
