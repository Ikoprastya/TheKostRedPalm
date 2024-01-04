import React from 'react'
import {Carousel} from 'react-bootstrap';
import imageSlide1 from '../images/slider/slide1.jpeg';
import imageSlide2 from '../images/slider/slide2.jpg';
import imageSlide3 from '../images/slider/slide3.jpeg';
import imageSlide4 from '../images/slider/slide4.jpeg';
import imageSlide5 from '../images/slider/slide5.jpg';
import imageSlide6 from '../images/slider/slide6.jpg';
import imageSlide7 from '../images/slider/slide7.jpeg';
import imageSlide8 from '../images/slider/slide8.jpeg';
import imageSlide9 from '../images/slider/slide9.jpeg';
import '../App.css'

const SliderImage = () => {
  return (
    <>
        <Carousel>
            <Carousel.Item>
                <img className='sliderImage slide1' src={imageSlide1} alt="slide1" />
            </Carousel.Item>

            <Carousel.Item>
                <img className='sliderImage slide2' src={imageSlide2} alt="slide2" />
            </Carousel.Item>

            <Carousel.Item>
                <img className='sliderImage' src={imageSlide3} alt="slide3"  />
            </Carousel.Item>

            <Carousel.Item>
                <img className='sliderImage slide4' src={imageSlide4} alt="slide4" />
            </Carousel.Item>

            <Carousel.Item>
                <img className='sliderImage' src={imageSlide5} alt="slide5"  />
            </Carousel.Item>

            <Carousel.Item>
                <img className='sliderImage' src={imageSlide6} alt="slide6"  />
            </Carousel.Item>

            <Carousel.Item>
                <img className='sliderImage slide7' src={imageSlide7} alt="slide7"  />
            </Carousel.Item>

            <Carousel.Item>
                <img className='sliderImage slide8' src={imageSlide8} alt="slide8" />
            </Carousel.Item>

            <Carousel.Item>
                <img className='sliderImage slide9' src={imageSlide9} alt="slide9" />
            </Carousel.Item>
        </Carousel>
    </>
  )
}

export default SliderImage