import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";
function Freebook() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getBook = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://bookstore-backend-o7xy.onrender.com/book?featured=true&limit=12");
        console.log(res.data);
        setBook(res.data.books || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="text-center mb-12">
          <h1 className="font-bold text-4xl text-gray-800 dark:text-white mb-4">
            Featured <span className="text-indigo-600">Books</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our handpicked collection of must-read books, from timeless classics 
            to contemporary bestsellers. Find your next favorite read today.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        ) : book.length > 0 ? (
          <div>
            <Slider {...settings}>
              {book.map((item) => (
                <Cards item={item} key={item._id} />
              ))}
            </Slider>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
              No books available
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Check back later for new arrivals!
            </p>
          </div>
        )}
      </div>
    </>
  );
}
export default Freebook;
