import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const gameData = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      description: "An open-world RPG set in a futuristic city.",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
    },
    {
      id: 2,
      title: "Elden Ring",
      description:
        "A challenging open-world adventure developed by FromSoftware.",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",
    },

    {
      id: 3,
      title: "The Witcher 3: Wild Hunt",
      description: "A story-driven open-world RPG set in a fantasy universe.",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
    },
    {
      id: 4,
      title: "Red Dead Redemption 2",
      description: "An epic Western action-adventure game from Rockstar Games.",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",
    },
  ];

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
      <body>

        <div className="container-game animate-scroll" id="gamelist">
        <h1 className="top-game-title ">Popular Games</h1>

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
                <img className="banner-image"src={game.image}/>
                <h1 className="mt-4 mb-4 font-bold">{game.title}</h1> <p>{game.description}</p>
              </div>
              <div className="button-wrapper">
                <button className="btn outline">DETAILS</button>
                <button className="btn fill">BUY NOW</button>
              </div>
            </div>
          ))}
        </div>
      </body>
    </div>
  );
};

export default HomePage;
