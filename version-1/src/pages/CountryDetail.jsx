import { useParams } from "react-router-dom";

function CountryDetail({ data }) {
  console.log(data);
  const countryName = useParams().countryName;

  let found = data.find((item) => {
    if (countryName === item.name.common) return true;
  });

  if (!found) {
    return console.log("Country not Found");
  }

  return (
    <>
      <div>
        <nav>
          <img src={found.flags.png} />
          <p>{found.name.common}</p>
          <p>{found.population}</p>
          <p>{found.region}</p>
          <p>{found.capital}</p>
        </nav>
      </div>
    </>
  );
}
export default CountryDetail;
