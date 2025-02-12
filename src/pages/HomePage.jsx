import React from "react";
import { Link } from "react-router-dom";
import gameData from "../data/gameData";

const HomePage = () => {
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
      <div className="container-game animate-scroll" id="gamelist">
        <h1 className="game-title ">Popular Games</h1>

        <div className="game-list-button-wrapper">
          <button className="game-list-button">
            <Link to="/games" className=" items-center gap-3">
              <span>View all games</span>{" "}
              <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </button>
        </div>
        {gameData.slice(0, 4).map((game) => (
          <div className="card-game " key={game.id}>
            <div className="wrapper">
              <img className="banner-image" src={game.image} />
              <div >
                <h1 className="text-game">{game.title}</h1>{" "}
                <p className="mt-4">{game.description}</p>
              </div>
            </div>
            <div className="button-wrapper">
              <button className="btn outline">DETAILS</button>
              <button className="btn fill">BUY NOW</button>
            </div>
          </div>
        ))}
      </div>

      <div className="container-free animate-scroll">
        <h1 className="game-free ">
          Free Games<i className="fa-solid fa-gift pl-4"></i>
        </h1>
        {gameData.slice(0, 4).map((game) => (
          <div className="card-free-game" key={game.id}>
            <img src={game.image} alt={game.title} />

            <div className="game-free-title">
              <p>{game.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
