import React from 'react';
import './category.css';
import { category } from '../../assets/data/data';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdArrowRight } from 'react-icons/md'
import { MdArrowLeft } from 'react-icons/md'

const NextArrow = (props) => {
    const { onClick } = props
    return (
        <div className="control_button" onClick={onClick}>
            <button className='next_button'>
                <MdArrowRight className='icon'/>
            </button>
        </div>
    )
}

const PrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className="control_button" onClick={onClick}>
            <button className='prev_button'>
                <MdArrowLeft className='icon'/>
            </button>
        </div>
    )
}

export const Category = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
                        <div className="overlay">
                            <h4>{item.category}</h4>
                            <p>{item.title}</p>
                        </div>
                    </div>
                </div>
                ))}
            </Slider>
        </div>
      </section>
    </>
  )
}
