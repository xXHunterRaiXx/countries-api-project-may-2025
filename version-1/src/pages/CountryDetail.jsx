import { useParams } from "react-router-dom";

function CountryDetail({ data }) {
  //countryDetail is a comment with the prop of data
  console.log(data);
  const countryName = useParams().countryName;
  //Returns an object in the data. data comes from the  <Route  path="/CountryDetail/:countryName" element={<CountryDetail data={data} />}/></Routes> in the app.jsx

  let found = data.find((item) => {
    if (countryName === item.name.common) return true;
  });
  // found is the varible where we assign data.find to. data.find helps us look for the data and puts it in the system so we are able to use it in the card detail.

  if (!found) {
    return console.log("Country not Found");
  }
  // this was for if found (the varible) was not found the console will show up saying it wasnt found

  return (
    <>
      <div>
        <nav>
          <img src={found.flags.png} />
          <p>{found.name.common}</p>
          <p>{found.population}</p>
          <p>{found.region}</p>
          <p>{found.capital}</p>
          {/* img is image and p is paragraph. we put {} so we can grab what we need and used dot bracket notation to look for found and the data we need for ex we need the country flag so we used inside {} the dot bracket notation found.flag.png */}
        </nav>
      </div>
    </>
  );
}
export default CountryDetail;
