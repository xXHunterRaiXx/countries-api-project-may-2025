import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SavedCountries from "./pages/SavedCountries";
import CountryDetail from "./pages/CountryDetail";

function App() {
  const [data, setData] = useState();

  //data is a varible for the usestate//

  function callMyApi() {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  }

  //fetch api//

  useEffect(() => {
    callMyApi();
    console.log(data, "APP DATA ");
  }, []);

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
