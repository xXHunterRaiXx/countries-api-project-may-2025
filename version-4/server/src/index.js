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

async function getAllSavedCoun() {
  const result = await db.query("SELECT saved_countries FROM countries");
  console.log(result);
  return result.rows;
}

async function getOneSavedCount(countriesName) {
  const result = await db.query(
    "SELECT saved_countries FROM countries WHERE name = $1",
    [countriesName]
  );
  return result.rows[0];
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

async function updateCounCount() {
  const result = await db.query(
    "(UPDATE country_counts SET count = count + 1 WHERE country_name = $1)"
  );
  console.log(result);
  return result.rows;
}

// ---------------------------------
// API Endpoints
// ---------------------------------

app.get("/get-all-saved-countries", async (req, res) => {
  const allSaved = await getAllSavedCoun();
  res.json(allSaved);
});

app.post("/save-one-country/:name", async (req, res) => {
  const countriesName = req.params.name;
  const countries = await getOneSavedCount(countriesName);
  res.json(countries);
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
  const updateCount = req.params.name;
  const user = await updateCounCount(updateCount);
  res.send("count has been updated");
  res.json(user);
});

// /get-newest-user
// /get-all-users
// POST	/add-one-user
// POST	/update-one-country-count
// 	/get-all-saved-countries
// POST	/save-one-country
