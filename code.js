const express = require("express");
const app = express();
const PORT = 3000;
let userID = 1;

app.get(`/api/users/${userID}`, (req, res) => {
  res.send(users[userID - 1]);
});

app.get("/api/users/", (req, res) => {
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

const users = [
  {
    id: 1,
    first_name: "Blake",
    last_name: "Wychard",
    email: "bwychard0@fda.gov",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Beck",
    last_name: "Edinboro",
    email: "bedinboro1@is.gd",
    gender: "Male",
  },
  {
    id: 3,
    first_name: "Denver",
    last_name: "Jandel",
    email: "djandel2@pagesperso-orange.fr",
    gender: "Male",
  },
  {
    id: 4,
    first_name: "Ewen",
    last_name: "Biaggetti",
    email: "ebiaggetti3@gmpg.org",
    gender: "Male",
  },
  {
    id: 5,
    first_name: "Clementine",
    last_name: "Ellsom",
    email: "cellsom4@shinystat.com",
    gender: "Female",
  },
  {
    id: 6,
    first_name: "Marnie",
    last_name: "Barajas",
    email: "mbarajas5@wp.com",
    gender: "Genderfluid",
  },
  {
    id: 7,
    first_name: "Britteny",
    last_name: "Donnett",
    email: "bdonnett6@hao123.com",
    gender: "Female",
  },
  {
    id: 8,
    first_name: "Lloyd",
    last_name: "Farraway",
    email: "lfarraway7@nbcnews.com",
    gender: "Male",
  },
  {
    id: 9,
    first_name: "Derwin",
    last_name: "Culshaw",
    email: "dculshaw8@ovh.net",
    gender: "Male",
  },
  {
    id: 10,
    first_name: "Pavla",
    last_name: "Bedow",
    email: "pbedow9@google.com.hk",
    gender: "Female",
  },
];
