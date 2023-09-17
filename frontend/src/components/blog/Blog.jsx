import React from 'react'
import './blog.css'
import { blog } from './../../assets/data/data'
import { BsTag } from 'react-icons/bs'

export const Blog = () => {
  return (
    <>
    <section className="blog">
        <div className="container grid">
            {blog.map((item) => (
                <div className="box boxitem" key={item.id}>
                    <div className="img">
                        <img src={item.cover} alt="Blog_Cover" />
                    </div>
                    <div className="details">
                        <div className="tag">
                            <BsTag className="icon" />
                            <a href="/">{item.category}</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
    </>
  )
}
