import express, { Router } from "express";
import bodyParser from "body-parser";
import userRoute from "./routes/User.js";
import movieRoute from "./routes/Movie.js";

const app = express();

const PORT = 3000;
const rootUserRoute = Router();
const rootMovieRoute = Router();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

rootUserRoute.use("/users", userRoute);
app.use("/api", rootUserRoute);

rootMovieRoute.use("/movie", movieRoute);
app.use("/api", rootMovieRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
