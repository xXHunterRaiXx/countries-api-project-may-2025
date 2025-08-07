import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function CountryCard({ name, flag, population, region, capital }) {
  //name, flag, population, region, and capital are props//
  // useState

  return (
    <>
      <div className="card">
        <div className="flag-img">
          <img src={flag} />
        </div>

        <div className="words">
          <Link to={`/CountryDetail/${name}`}>
            {" "}
            <p>{name}</p>{" "}
          </Link>
          <p>{population}</p>
          <p>{region}</p>
          <p>{capital}</p>
        </div>
      </div>
    </>
  );
}

export default CountryCard;
