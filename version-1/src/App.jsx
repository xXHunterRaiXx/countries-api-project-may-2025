import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SavedCountries from "./pages/SavedCountries";
import CountryDetail from "./pages/CountryDetail";

function App() {
  const [data, setData] = useState();

  //data is a varible for the usestate/ data will end up holding the data thats in the api after call the api/

  function callMyApi() {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  }

  //fetch api/ api is where youur data lives so funtion callmyapi helps you retrive the data once you fetch the api//

  useEffect(() => {
    callMyApi();
    console.log(data, "APP DATA ");
  }, []);

  // uses useeffect to call and render my api this will run once page loads//

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Where in the World</Link>
          </li>
          <li>
            <Link to="/SavedCountries">Saved Countries</Link>
          </li>
        </ul>
      </nav>
      {/* nav */}

      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/SavedCountries" element={<SavedCountries />} />
        <Route
          path="/CountryDetail/:countryName"
          element={<CountryDetail data={data} />}
        />
      </Routes>
    </div>

    // routes that let the linked area know whatere to go
  );
}

export default App;
