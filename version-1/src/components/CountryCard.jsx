import { useState } from "react";

function CountryCard({ name, flag, population, region, capital }) {
  //name, flag, population, region, and capital are props//
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
          {/* calling the props */}
        </div>
      </div>
    </>
  );
}

export default CountryCard;
