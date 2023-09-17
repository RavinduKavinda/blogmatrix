import React from 'react'
import './blog.css'
import { blog } from './../../assets/data/data'
import { BsTag } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { GoClock } from 'react-icons/go'
import { FaRegComment } from 'react-icons/fa'
import { PiShareFat } from 'react-icons/pi'

export const Blog = () => {
  return (
    <>
    <section className="blog">
        <div className="container grid">
            {blog.map((item) => (
                <div className="box box__item" key={item.id}>
                    <div className="img">
                        <img src={item.cover} alt="Blog_Cover" />
                    </div>
                    <div className="details">
                        <div className="tag">
                            <BsTag className="icon" />
                            <a href="/">{item.category}</a>
                        </div>
                        <Link to={`/details/${item.id}`} className='link'>
                            <h3>{item.title}</h3>
                        </Link>
                        <p>{item.desc.slice(0,150)}...</p>
                        <div className="date">
                            <GoClock className="icon" /> <label htmlFor="">{item.date}</label>
                            <FaRegComment className="icon" /> <label htmlFor="">30</label>
                            <PiShareFat className="icon" /> <label htmlFor="">Share</label>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
    </>
  )
}
