import express from "express";
const app = express();
const PORT = 3000;

app.get(`/api/users/:id`, (req, res) => {
  const person = users.filter((user) => {
    return user.id === parseInt(req.params.id);
  });
  res.send(person[0]);
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
    firstName: "Blake",
    lastName: "Wychard",
    email: "bwychard0@fda.gov",
    gender: "Male",
  },
  {
    id: 2,
    firstName: "Beck",
    lastName: "Edinboro",
    email: "bedinboro1@is.gd",
    gender: "Male",
  },
  {
    id: 3,
    firstName: "Denver",
    lastName: "Jandel",
    email: "djandel2@pagesperso-orange.fr",
    gender: "Male",
  },
  {
    id: 4,
    firstName: "Ewen",
    lastName: "Biaggetti",
    email: "ebiaggetti3@gmpg.org",
    gender: "Male",
  },
  {
    id: 5,
    firstName: "Clementine",
    lastName: "Ellsom",
    email: "cellsom4@shinystat.com",
    gender: "Female",
  },
  {
    id: 6,
    firstName: "Marnie",
    lastName: "Barajas",
    email: "mbarajas5@wp.com",
    gender: "Genderfluid",
  },
  {
    id: 7,
    firstName: "Britteny",
    lastName: "Donnett",
    email: "bdonnett6@hao123.com",
    gender: "Female",
  },
  {
    id: 8,
    firstName: "Lloyd",
    lastName: "Farraway",
    email: "lfarraway7@nbcnews.com",
    gender: "Male",
  },
  {
    id: 9,
    firstName: "Derwin",
    lastName: "Culshaw",
    email: "dculshaw8@ovh.net",
    gender: "Male",
  },
  {
    id: 10,
    firstName: "Pavla",
    lastName: "Bedow",
    email: "pbedow9@google.com.hk",
    gender: "Female",
  },
];
