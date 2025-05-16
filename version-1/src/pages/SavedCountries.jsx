import { useState } from "react";

function SavedCountries() {
  const [formData, setFormData] = useState({
    countries: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function getSelected(event) {
    event.preventDefault();
    console.log(formData);
    callMyApi(formData.countries);
    setFormData({ countries: "" });
  }
  // this lets me click on the form//

  return (
    <>
      <form onSubmit={getSelected}>
        <div id="countries">
          <br />
          <label htmlFor="countries">Find My Country</label>
          <input
            type="text"
            name="countries"
            id="countries"
            value={formData.countries}
            onChange={handleChange}
          />
        </div>
        {/* <div id="countries">
          <br />
          <label htmlFor="countries">Witch City</label>
          <input
            type="text"
            name="countries"
            id="countries"
            value={formData.countries}
            onChange={handleChange}
          />
        </div>
          <div id="countries">
          <br />
          <label htmlFor="countries">Witch City</label>
          <input
            type="text"
            name="countries"
            id="countries"
            value={formData.countries}
            onChange={handleChange}
          />
        </div> */}
        <div id="button">
          <button id="submit" type="submit">
            Submit
          </button>
        </div>
      </form>
      {/* start of the form 100% not done */}
    </>
  );
}

export default SavedCountries;
