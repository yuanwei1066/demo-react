import React from "react";
import "./index.style.css";

export const Card = ({monster, index}) => (
  <div className="card-container">
    <img
      alt="monsters"
      src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
    ></img>
    <h2>{monster.name}</h2>
    <p>{monster.email}</p>
  </div>
);
