import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function CountryDetail({ data }) {
  const [count, setCount] = useState(0);
  const { savedCountries, setSavedCountries } = useState();
  //countryDetail is a comment with the prop of data
  // console.log(data);
  const countryName = useParams().countryName;
  //Returns an object in the country name from the url <Route  path="/CountryDetail/:countryName" element={<CountryDetail data={data} />}/></Routes> in the app.jsx

  const updateCount = () => {
    const newCount = JSON.parse(
      localStorage.getItem(`${countryName}Count` || 0)
    );
    const plusOneCount = newCount + 1;
    setCount(plusOneCount);
    localStorage.setItem(`${countryName}Count`, JSON.stringify(plusOneCount));
  };
  useEffect(() => {
    updateCount();
  }, []);

  const saveOneCountry = async () => {
    //retrivving the exsiting saved countries if the exsiting country isnt found it turns back into an epty array
    const existingSaved =
      (await JSON.parse(localStorage.getItem("savedCountries"))) || [];
    //The logical OR ( || ) (logical disjunction) operator for a set of operands is true if and only if one or more of its operands is true. It is typically used with boolean (logical) values.
    //need to make it where only one of the saved country shows not multiple in an array

    //this code lets us see if the country is already saved if it does we do not run the following code
    const alreadySavedYet = existingSaved.some(
      (item) => item.country_name === countryName
    );
    // this code is a if else statement telling you if it already saved say error if not it goes to else and pushes the country to the exsiting saved array
    if (alreadySavedYet) {
      console.log("error");
    } else {
      existingSaved.push({ country_name: countryName });
    }
    localStorage.setItem("savedCountries", JSON.stringify(existingSaved));
    console.log(`${countryName} is successfully saved.`);
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
