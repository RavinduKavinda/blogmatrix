import React from 'react';
import './category.css';
import { category } from '../../assets/data/data';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowDropright } from 'react-icons/io'
import { IoIosArrowDropleft } from 'react-icons/io'

const NextArrow = (props) => {
    const { onclick } = props
    return (
        <div className="control_button" onClick={onclick}>
            <button className='next_button'>
                <IoIosArrowDropright className='icon'/>
            </button>
        </div>
    )
}

const PrevArrow = (props) => {
    const { onclick } = props
    return (
        <div className="control_button" onClick={onclick}>
            <button className='prev_button'>
                <IoIosArrowDropleft className='icon'/>
            </button>
        </div>
    )
}

export const Category = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        nextArrow: <PrevArrow />,
        Responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

  return (
    <>
       <section className='category'>
        <div className='content'>
        <Slider {...settings}>
            {category.map((item) => (
              <div className='boxs' key={item.id}>
                <div className='box' >
                    <img src={item.cover} alt="cover" />
                </div>

                <div className="overlay">
                    <h4>{item.category}</h4>
                    <p>{item.title}</p>
                </div>
        
            </div>
            ))}
        </Slider>
        </div>
      </section>
    </>
  )
}
