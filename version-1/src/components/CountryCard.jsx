import { useState } from "react";

function CountryCard({ name, flag, population, region, capital }) {
  return (
    <>
      <div className="card">
        <div className="flag-img">
          <img src={flag} />
        </div>

        <div className="words">
          <p>{name}</p>
          <p>{population}</p>
          <p>{region}</p>
          <p>{capital}</p>
        </div>
      </div>
    </>
  );
}

export default CountryCard;
