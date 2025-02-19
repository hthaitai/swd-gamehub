import React, { useState } from "react";
import { Link } from "react-router-dom";
import gameData from "../data/gameData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6; // Số game hiển thị trên mỗi slide
  const totalGames = gameData.length;

  const nextSlide = () => {
    if (currentIndex + itemsPerPage < totalGames) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };
  return (
    <div>
      <header className="homepage">
        <h1 className="homepage-title" id="home">
          {Array.from("gamehub").map((letter, index) => (
            <span
              key={index}
              className="letter"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>
        <p className="homepage-subtitle">
          The perfect place to browse games and assets
        </p>
      </header>
      <div className=" animate-scroll" id="gamelist">
        <div className="flex text-center justify-center game-box-popular">
          <h1 className="game-title ">Popular Games</h1>
          {gameData
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((game) => (
              <div className="card-game-popular " key={game.id}>
                <button>
                  <LazyLoadImage
                    className="card-popular-img "
                    src={game.imagePortrait}
                    alt={game.title}
                    effect="blur"
                  />
                </button>

                <p className="pt-4 font-semibold">{game.title}</p>
                <p className="">{game.price}</p>
              </div>
            ))}
          <div className="slider-buttons ">
            <button onClick={prevSlide} disabled={currentIndex === 0}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex + itemsPerPage >= totalGames}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="game-list-button-wrapper">
          <button className="game-list-button">
            <Link to="/games" className=" items-center gap-3">
              <span>View all games</span>{" "}
              <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </button>
        </div>
      </div>

      <div className="container-free ">
        <h1 className="game-free ">
          Free Games<i className="fa-solid fa-gift pl-4"></i>
        </h1>
        <Swiper
          modules={[Autoplay]} // Thêm module Autoplay
          spaceBetween={10}
          speed={2500}
          slidesPerView={3}
          autoplay={{
            delay: 0, // Tự động chạy sau 3 giây
            disableOnInteraction: false, // Tiếp tục chạy dù người dùng tương tác
          }}
          loop={true} // Cho phép lặp lại sau khi hết danh sách
        >
          {gameData
            .filter((game) => game.price === "Free")
            .map((game) => (
              <SwiperSlide key={game.id}>
                <button className="card-free-game">
                  <img src={game.image} alt={game.title} />
                  <div className="game-free-title">
                    <p>{game.title}</p>
                  </div>
                </button>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="game-box-popular">
        <div className="w-11/12 flex  h-full ">
          {/* <div className="w-7/12 bg-blue-400 h-full">
a
          </div> */}
          <div className="w-full h-full animate-scroll bg-cover flex flex-col items-center justify-center p-6 text-white bg-center">
            <h1 className="text-6xl font-bold ">
              Sell & Buy Unity Game Assets
            </h1>
            <p className="mt-2 text-xl text-center">
              Discover high-quality game assets for Unity, from 3D models to
              textures, animations, and UI elements. Start building your dream
              game today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
