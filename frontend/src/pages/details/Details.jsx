import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blog } from "../../assets/data/data"
import "./details.css"
import { HiOutlinePencilSquare } from 'react-icons/hi2'
import { RiDeleteBinLine } from 'react-icons/ri'
import "../../components/header/header.css"

export const Details = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    if (blogs) {
      setBlogs(blogs)
    }
  }, [])

  return (
    <>
      {blogs ? (
        <section className='single__post'>
          <div className='container'>

            {/*----- Left -----*/}
            <div className='left'>
              <img src={blogs.cover} alt='' />
            </div>

            {/*----- Right -----*/}
            <div className='right'>
              <div className='buttons'>
                <button className='button'>
                  <HiOutlinePencilSquare />
                </button>
                <button className='button'>
                  <RiDeleteBinLine />
                </button>
              </div>
              <h1>EXPLORING THE WILDERNESS</h1>
              <p>{blogs.desc}</p>
              <p>The call of the wild is a primal urge that resonates with many of us. 
                Whether you're an experienced outdoors enthusiast or someone looking to dip 
                their toes into the world of wilderness exploration, there's something truly 
                magical about venturing into the untamed beauty of nature. In this blog post, 
                we'll embark on a virtual journey into the wilderness, exploring the wonders and 
                benefits of spending time in the great outdoors. Exploring the wilderness is a 
                transformative experience that can leave you with lasting memories and a newfound 
                appreciation for the world around you. Whether you're seeking adventure, solace, or a 
                deeper connection with nature, the wilderness has something to offer everyone. So, gear 
                up, step outside, and embark on your own journey into the heart of nature. It's a voyage 
                you won't soon forget.</p>

                <p>The call of the wild is a primal urge that resonates with many of us. 
                Whether you're an experienced outdoors enthusiast or someone looking to dip 
                their toes into the world of wilderness exploration, there's something truly 
                magical about venturing into the untamed beauty of nature. In this blog post, 
                we'll embark on a virtual journey into the wilderness, exploring the wonders and 
                benefits of spending time in the great outdoors. Exploring the wilderness is a 
                transformative experience that can leave you with lasting memories and a newfound 
                appreciation for the world around you. Whether you're seeking adventure, solace, or a 
                deeper connection with nature, the wilderness has something to offer everyone. So, gear 
                up, step outside, and embark on your own journey into the heart of nature. It's a voyage 
                you won't soon forget.</p>

                <p>The call of the wild is a primal urge that resonates with many of us. 
                Whether you're an experienced outdoors enthusiast or someone looking to dip 
                their toes into the world of wilderness exploration, there's something truly 
                magical about venturing into the untamed beauty of nature. In this blog post, 
                we'll embark on a virtual journey into the wilderness, exploring the wonders and 
                benefits of spending time in the great outdoors. Exploring the wilderness is a 
                transformative experience that can leave you with lasting memories and a newfound 
                appreciation for the world around you. Whether you're seeking adventure, solace, or a 
                deeper connection with nature, the wilderness has something to offer everyone. So, gear 
                up, step outside, and embark on your own journey into the heart of nature. It's a voyage 
                you won't soon forget.</p>
                
              <p>Author: Ravindu</p>
            </div>

          </div>
        </section>
      ) : null}
    </>
  )
}