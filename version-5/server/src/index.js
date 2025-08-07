// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------

// Importing our Node modules
import express from "express"; // The framework that lets us easily build a web server
import pg from "pg"; // pg stands for PostgreSQL, for talking to the database
import config from "./config.js"; // we need access to our database connection credentials

// connect to our PostgreSQL database, or db for short
const db = new pg.Pool({
  connectionString: config.databaseUrl, // credentials to access the database — keep this private!
  ssl: true, // we will use SSL encryption when connecting to the database
});

const app = express(); // Creating an instance of the express module

app.use(express.json()); // This server will receive and respond in JSON format

const port = 3000; // Declaring which port to listen to to receive requests

// Turning on our server to listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// ---------------------------------
// Helper Functions
// ---------------------------------

async function getAllSavedCount() {
  const result = await db.query("SELECT * FROM saved_countries");
  console.log(result);
  return result.rows;
}

async function savedOneCountry(countriesName) {
  const result = await db.query(
    "INSERT INTO saved_countries (country_name) VALUES ($1) ON CONFLICT (country_name) DO NOTHING",
    [countriesName.country_name]
  );
  return result.rows;
}

async function getAllUsers() {
  const result = await db.query("SELECT * FROM user_info");
  console.log(result);
  return result.rows;
}

async function getNewestUsers() {
  const result = await db.query(
    "SELECT * FROM user_info ORDER BY user_id  desc LIMIT 1; "
  );
  console.log(result);
  return result.rows;
}

async function addOneUsers(user) {
  const result = await db.query(
    "INSERT INTO user_info (name, country_name,email,bio) VALUES ($1, $2, $3, $4)",
    [user.name, user.country_name, user.email, user.bio]
  );
  console.log(result);
  return result.rows;
}

async function updateCounCount(updatedCountryCounts) {
  const result = await db.query(
    'INSERT INTO country_counts (country_name, count) VALUES ($1, 1) ON CONFLICT (country_name) DO UPDATE SET count = country_counts.count + 1 RETURNING count AS "newCount"',
    [updatedCountryCounts.country_name]
  );
  console.log(result);
  return result.rows[0];
}

// ---------------------------------
// API Endpoints
// ---------------------------------

app.get("/get-all-saved-countries", async (req, res) => {
  const allSaved = await getAllSavedCount();
  res.json(allSaved);
});

app.post("/save-one-country", async (req, res) => {
  const countriesName = req.body;
  await savedOneCountry(countriesName);
  res.send("Success! The country is saved.");
});

app.get("/get-all-users", async (req, res) => {
  const allUsers = await getAllUsers();
  res.json(allUsers);
});

app.get("/get-newest-user", async (req, res) => {
  const newUsers = await getNewestUsers();
  res.json(newUsers);
});

app.post("/add-one-user", async (req, res) => {
  const addUser = req.body;
  await addOneUsers(addUser);
  res.send("user was successfully added!");
});

app.post("/update-one-country-count", async (req, res) => {
  const updateCount = req.body;
  const updateTheCount = await updateCounCount(updateCount);
  res.json(updateTheCount);
});
