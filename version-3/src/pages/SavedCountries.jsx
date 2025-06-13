import { useState, useEffect } from "react";

function SavedCountries() {
  const [formData, setFormData] = useState({
    countries: "",
    name: "",
    email: "",
    bio: "",
  });
  console.log(formData);

  const [newUserData, setNewUserData] = useState(null);
  // const [allUserData, setallUserData] = useState(null);
  // const [allSavedData, setAllSavedData] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    addOneUser();
    setFormData({ countries: "", name: "", email: "", bio: "" });
  }

  const newUser = () => {
    const response = fetch("/api/get-newest-user", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("this is the new user:", data);
        setNewUserData(data[0].name);
        console.log(data[0].name);
      })
      .catch((error) => console.error("Error: Can't Count", error));
  };

  const allUser = () => {
    const response = fetch("/api/get-all-users", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("these are all the users:", data);
      })
      .catch((error) => console.error("Error: Can't Count", error));
  };

  const allSaved = () => {
    const response = fetch("/api/get-all-saved-countries", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("this is the saved countries:", data);
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
        name: formData.name,
        country_name: formData.countries,
        email: formData.email,
        bio: formData.bio,
      }),
    })
      .then((data) => {
        console.log("new user added:", data);
      })
      .catch((error) => console.error("Error: Can't Count", error));
  };

  useEffect(() => {
    newUser();
  }, []);

  useEffect(() => {
    allUser();
  }, []);

  useEffect(() => {
    allSaved();
  }, []);

  return (
    <>
      <div>
        <form id="form" onSubmit={handleSubmit}>
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

        <p>Welcome {newUserData}</p>
      </div>
    </>
  );
}

export default SavedCountries;
