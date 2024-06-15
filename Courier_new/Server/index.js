import  express  from "express";
import mongoose  from "mongoose";
import cors from "cors";
import  {PORT}  from "./config.js";
import { mongodbURL } from "./config.js";
import router from "./routes/routes.js";




const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send(`welcome`);
});

app.use('/oder', router);


mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("app connected to database");
    app.listen(PORT, () => {
      console.log(`App running : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });