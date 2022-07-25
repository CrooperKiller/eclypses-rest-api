import express, { Router } from "express";
import bodyParser from "body-parser";
import userRoute from "./routes/User.js";

const app = express();
const PORT = 3000;
const rootUserRoute = Router();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use("/api", rootUserRoute);
rootUserRoute.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
