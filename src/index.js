//import dotenv from "dotenv";
import express, { Router } from "express";
import bodyParser from "body-parser";
import userRoute from "./routes/User.js";

//console.log("================", __dirname);
// dotenv.config({
//   path: __dirname,
// });

const app = express();

const PORT = 5432;
const rootUserRoute = Router();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());
rootUserRoute.use("/users", userRoute);
app.use("/api", rootUserRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
