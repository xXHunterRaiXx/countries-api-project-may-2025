import { useState, useEffect } from "react";

function SavedCountries() {
  const [formData, setFormData] = useState({
    countries: "",
    name: "",
    email: "",
    bio: "",
  });

  const [newUsaer, setNewUser] = useState();
  const [allUserData, setallUserData] = useState();
  const [allSavedData, setAllSavedData] = useState();
  const [addUser, setAddUser] = useState();

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

  const newUser = () => {
    const response = fetch("/api/get-newest-user", {
      method: "GET",
    })
      .then((response) => response.json())
      .then(() => {
        console.log();
        setNewUser();
      })
      .catch((error) => console.error("Error: Can't Count", error));
  };

  const allUser = () => {
    const response = fetch("/api/get-all-users", {
      method: "GET",
    })
      .then((response) => response.json())
      .then(() => {
        console.log();
        setallUserData();
      })
      .catch((error) => console.error("Error: Can't Count", error));
  };

  const allSaved = () => {
    const response = fetch("/api/get-all-saved-countries", {
      method: "GET",
    })
      .then((response) => response.json())
      .then(() => {
        console.log();
        setAllSavedData();
      })
      .catch((error) => console.error("Error: Can't Count", error));
  };

  const addOneUser = () => {
    const response = fetch("/api/add-one-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country_name: countryName,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        console.log();
        setAddUser();
      })
      .catch((error) => console.error("Error: Can't Count", error));
  };

  useEffect(() => {
    newUser;
    allUser;
    allSaved;
    addOneUser;
  }, []);

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
