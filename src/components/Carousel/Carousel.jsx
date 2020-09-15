import React from 'react';
import Slider from 'react-slick';
import './Carousel.scss';
import image1 from '../../images/Carousel/image1.png';
import image2 from '../../images/Carousel/image2.jpg';
import image3 from '../../images/Carousel/image3.jpg';
import image4 from '../../images/Carousel/image4.jpg';
import image5 from '../../images/Carousel/image5.jpg';
import image6 from '../../images/Carousel/image6.jpg';
const CarouselMovies = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className='container__carousel'>
      <Slider {...settings}>
        <div>
          <img src={image1} alt='' className='container__carousel__img' />
        </div>
        <div>
          <img src={image2} alt='' className='container__carousel__img' />
        </div>
        <div>
          <img src={image3} alt='' className='container__carousel__img' />
        </div>
        <div>
          <img src={image4} alt='' className='container__carousel__img' />
        </div>
        <div>
          <img src={image5} alt='' className='container__carousel__img' />
        </div>
        <div>
          <img src={image6} alt='' className='container__carousel__img' />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselMovies;
