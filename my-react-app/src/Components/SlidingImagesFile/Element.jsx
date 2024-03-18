import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./WhatsApp Image 2024-03-15 at 9.04.31 PM.jpeg";
import image2 from "./WhatsApp Image 2024-03-14 at 7.58.22 AM.jpeg";
import image3 from "./WhatsApp Image 2024-03-14 at 7.58.23 AM.jpeg";
import image4 from "./WhatsApp Image 2024-03-14 at 7.58.56 AM (1).jpeg";
import image5 from "./WhatsApp Image 2024-03-14 at 7.58.56 AM.jpeg";

export const Element = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust speed as needed
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    afterChange: (current) => setCurrentSlide(current),
  };

  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-prev" onClick={onClick}>
        {"<"}
      </div>
    );
  }

  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-next" onClick={onClick}>
        {">"}
      </div>
    );
  }

  return (
    <div className="w-full relative">
      <Slider className="slider-container" {...settings}>
        <div>
          <img src={image1} alt="Image 1" className="w-full h-auto" />
        </div>
        <div>
          <img src={image2} alt="Image 2" className="w-full h-auto" />
        </div>
        <div>
          <img src={image3} alt="Image 3" className="w-full h-auto" />
        </div>
        <div>
          <img src={image4} alt="Image 4" className="w-full h-auto" />
        </div>
        <div>
          <img src={image5} alt="Image 5" className="w-full h-auto" />
        </div>
      </Slider>
    </div>
  );
};

export default Element;
