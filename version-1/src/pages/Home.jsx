// import localData from "../localData";
import { useState, useEffect } from "react";
import React, { Component } from "react";
import CountryCard from "../components/CountryCard";

function Home({ data }) {
  // const [appData, setAppData] = useState(localData);
  //usestate varible//

  return (
    <>
      <div>
        <div className="container">
          {data?.map((item, index) => {
            return (
              <CountryCard
                flag={item.flags.png}
                name={item.name.common}
                population={item.population}
                region={item.region}
                capital={item.capital}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
