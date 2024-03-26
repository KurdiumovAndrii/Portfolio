import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Me1 from './../../img/about/Me1.jpg'
import Me2 from './../../img/about/Me2.jpg'
import Me3 from './../../img/about/Me3.jpg'
import Me4 from './../../img/about/Me4.jpg'
import Me5 from './../../img/about/Me5.jpg'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container-about">
    <Slider {...settings}>
      <div>
        <img src={Me1} alt=''className="about-image"/>
      </div>
      <div>
        <img src={Me2} alt='' className="about-image"/>
      </div>
      <div>
        <img src={Me3} alt='' className="about-image"/>
      </div>
      <div>
        <img src={Me4} alt='' className="about-image"/>
      </div>
      <div>
        <img src={Me5} alt='' className="about-image"/>
      </div>
    </Slider>
    </div>
  );
}