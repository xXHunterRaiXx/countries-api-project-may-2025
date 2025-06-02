import { useState } from "react";

function SavedCountries() {
  const [formData, setFormData] = useState({
    countries: "",
    name: "",
    email: "",
    bio: "",
  });

  const profileInfo = {
    countries: "",
    name: "",
    email: "",
    bio: "",
  };

  localStorage.setItem("profileInfo", profileInfo);
  console.log(localStorage);

  let info_serialized = JSON.stringify(profileInfo);
  console.log(info_serialized);

  localStorage.setItem("fprofileInfo, info_serialized");
  console.log(localStorage);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function getSelected(event) {
    event.preventDefault();
    console.log(formData);
    callMyApi(formData.countries);
    setFormData({ countries: "", name: "", email: "", bio: "" });
  }
  // this lets me click on the form//

  return (
    <>
      <form id="form" onSubmit={getSelected}>
        <h1>My Profile</h1>
        <div id="name">
          <br />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div id="email">
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div id="countries">
          <br />
          <label htmlFor="countries">Country</label>
          <input
            type="text"
            name="countries"
            id="countries"
            value={formData.countries}
            onChange={handleChange}
          />
        </div>

        <div id="bio">
          <br />
          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            name="bio"
            id="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>

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
