import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function CountryDetail({ data }) {
  const [count, setCount] = useState(0);
  //countryDetail is a comment with the prop of data
  // console.log(data);
  const countryName = useParams().countryName;
  //Returns an object in the country name from the url <Route  path="/CountryDetail/:countryName" element={<CountryDetail data={data} />}/></Routes> in the app.jsx

  const updateCount = () => {
    let newCount = JSON.parse(localStorage.getItem(`${countryName}Count` || 0));
    let plusOneCount = newCount + 1;
    setCount(plusOneCount);
    localStorage.setItem(`${countryName}Count`, JSON.stringify(plusOneCount));
  };
  useEffect(() => {
    updateCount();
  }, []);

  const saveOneCountry = () => {};

  let found;
  if (data) {
    found = data.find((item) => {
      if (countryName === item.name.common) return true;
    });
    // found is the varible where we assign data.find to. data.find helps us look for the data and puts it in the system so we are able to use it in the card detail.
  }
  if (!found) {
    return console.log("Country not Found");
  }
  // this was for if found (the varible) was not found the console will show up saying it wasnt found

  return (
    <>
      <div>
        <nav>
          <button>BACK</button>
        </nav>
        {found && (
          <div>
            <img src={found.flags.png} />
            <p>{found.name.common}</p>
            <button onClick={saveOneCountry}> save </button>
            <p>POPULATION: {found.population}</p>
            <p>REGION: {found.region}</p>
            <p>CAPITAL: {found.capital}</p>
            <p>VEIWED: {count}</p>
          </div>
        )}
        {/* img is image and p is paragraph. we put {} so we can grab what we need and used dot notation to look for found and the data we need for ex we need the country flag so we used inside {} the dot notation found.flag.png */}
      </div>
    </>
  );
}
export default CountryDetail;
