import React, { useState } from "react";
import { Link } from "react-router-dom";
import gameData from "../data/gameData";

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
          {gameData.slice(currentIndex, currentIndex + itemsPerPage).map((game) => (
            <div className="card-game-popular " key={game.id}>
              <button>
              <img
                className="card-popular-img "
                src={game.imagePortrait}
                alt={game.title}
              />
              </button>
              
              <p className="pt-4 font-semibold">{game.title}</p>
              <p className="">{game.price}</p>
            </div>
          ))}
          <div  className="slider-buttons ">
            <button onClick={prevSlide} disabled={currentIndex === 0}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button onClick={nextSlide} disabled={currentIndex + itemsPerPage >= totalGames}>
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
        {gameData.slice(0, 4).map((game) => (
          <button className="card-free-game" key={game.id}>
            <img src={game.image} alt={game.title} />

            <div className="game-free-title">
              <p className="">{game.title}</p>
            </div>
          </button>
        ))}
      </div>
      <div className="game-box-popular">
        <div>
          
        </div>
        <div className="w-2/3 bg-red-400 h-full">

        </div> 
        <div className="w-1/2  bg-blue-400 h-full">

        </div>
      </div>
    </div>
  );
};

export default HomePage;
