import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function CountryDetail({ data }) {
  const [count, setCount] = useState(0);
  //countryDetail is a comment with the prop of data
  // console.log(data);
  const countryName = useParams().countryName;
  //Returns an object in the country name from the url <Route  path="/CountryDetail/:countryName" element={<CountryDetail data={data} />}/></Routes> in the app.jsx

  const updateCount = () => {
    //variable updateCount is assigned an funtion. => is a arrow key
    const response = fetch("/api/update-one-country-count", {
      // the verable of response fetches for the api "https://backend-answer-keys.onrender.com/". the link is written as apil/ instead of
      // "https://backend-answer-keys.onrender.com/" due to the vite.config.js file. it tells us to replace the url for the api https://backend-answer-keys.onrender.com/ to api
      method: "POST",
      //this is the method
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country_name: countryName,
        //json.stringify turns the object into a string
      }),
    })
      .then((response) => response.json())
      //this gets the api and turn it into json
      .then((data) => {
        console.log("viewed:", data);
        setCount(data.newCount);
        //setCount comes from our useState varible setCount helps us update and change our count funtion
        //you use dot notation to change the count the count inital state is 0 so you have to get the data and get the newcount from it
      })
      .catch((error) => console.error("Error: 404", error));
  };
  // this helps us interract with the contents in the api helping us render to the screen
  useEffect(() => {
    if (count === 0) {
      updateCount();
    }
    // the useeffect calls the function of updateCount witch was made on line 11
  }, []);

  const saveOneCountry = () => {
    const response = fetch("/api/save-one-country", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country_name: countryName,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("saved", data);
      })
      .catch((error) => console.error("Error:", error));
    console.log("Post is running", response);
  };

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
