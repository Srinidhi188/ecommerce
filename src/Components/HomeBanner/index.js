import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

     return(
        <div className = "homeBannerSection">
               <Slider {...settings}></Slider>
               <img src = "https://rukminim2.flixcart.com/fk-p-flap/1620/1620/image/723e79af80af66ad.jpg?q=20 " className="w-100"/> 


               
        </div>
     )
}

export default HomeBanner;