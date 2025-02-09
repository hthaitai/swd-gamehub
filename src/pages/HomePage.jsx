import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const gameData = [
    {
      id: 1,
      title: "Toyota Supra",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Nissan GTR",
      description: "A legendary sports car with high performance.",
    },
    {
      id: 3,
      title: "Ferrari 488",
      description: "An Italian supercar with a powerful engine.",
    },
    {
      id: 4,
      title: "Lamborghini Huracan",
      description: "Luxury and speed combined in one package.",
    },
   
  ];

  return (
    <div>
      <div className="homepage">
        <h1 className="homepage-title">
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
      </div>

      <div className="container-game">
        <div className="game-list-button-wrapper">
          <button className="game-list-button">
            <Link to="/games" className="flex items-center gap-3">
              <span>View all games</span>{" "}
              <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </button>
        </div>
        {gameData.slice(0, 4).map((game) => (
          <div className="card-game " key={game.id}>
            <div class="wrapper">
              <div class="banner-image"> </div>
              <h1>{game.title}</h1> <p>{game.description}</p>
            </div>
            <div class="button-wrapper">
              <button class="btn outline">DETAILS</button>
              <button class="btn fill">BUY NOW</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
