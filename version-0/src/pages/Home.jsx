import localData from "../localData";
import { useState, useEffect } from "react";
import React, { Component } from "react";
import CountryCard from "../components/CountryCard";

function Home() {
  const [appData, setAppData] = useState(localData);
  const [filteredCountries, setFilteredCountries] = useState("all");

  // {
  //   filteredCountries.map((country) => (
  //     <h2 key={country.name.common}>{country.name.common}</h2>
  //   ));
  // }

  useEffect(() => {
    console.log(appData, "APP DATA ");
  }, [appData]);

  return (
    <>
      <div>
        <div className="container">
          {appData.map((item, key) => {
            return (
              <CountryCard
                flag={item.flags.png}
                name={item.name.common}
                population={item.population}
                region={item.region}
                capital={item.capital}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
