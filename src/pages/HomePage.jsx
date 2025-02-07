import React from "react"

const HomePage = () => {
  return (
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
  )
}

export default HomePage
