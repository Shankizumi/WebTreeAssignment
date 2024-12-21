import React from "react";
import "./card.css";

function Card({ user }) {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Charm:wght@400;700&family=Josefin+Sans:wght@500&family=Playwrite+AU+SA+Guides&family=Protest+Strike&family=Ubuntu:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className="card">
        <div className="card-image">
          <img src={user.picture.large} alt={`${user.name.first}'s profile`} />
        </div>
        <div className="card-content">
          <h2>{`${user.name.first} ${user.name.last}`}</h2>
          <p>
            <strong>Gender:</strong> {user.gender}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
