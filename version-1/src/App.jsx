import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SavedCountries from "./pages/SavedCountries";
import CountryDetail from "./pages/CountryDetail";

function App() {
  const [data, setData] = useState();

  function callMyApi() {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  }

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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SavedCountries" element={<SavedCountries />} />
        <Route path="/CountryDetail" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
