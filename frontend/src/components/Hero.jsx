import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const objHero = [
  {
    image: "/hero-img-1.jpg",
  },
  {
    image: "/hero-img-2.jpg",
  },
];

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => (
  <button
    className="opacity-20 absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10 hover:bg-black/70"
    onClick={onClick}
  >
    <ChevronLeft size={24} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="opacity-20 absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10 hover:bg-black/70"
    onClick={onClick}
  >
    <ChevronRight size={24} />
  </button>
);

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false, // Hide dots on small screens
        },
      },
    ],
  };

  return (
    <div className="lg:flex justify-center relative w-full">
      <div className="w-full">
        <Slider {...settings}>
          {objHero.map((item, index) => (
            <div key={index}>
              <img
                className="lg:h-[75vh] w-full object-contain"
                src={item.image}
                alt="hero"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
