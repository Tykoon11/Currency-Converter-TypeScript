import express from "express";
import dotenv from "dotenv";
import convert from "./routes/convert";
import cors from "cors";

const app: express.Application = express();
dotenv.config();
const port = process.env.BACK_PORT;

app.use(cors());
app.use("/convert", convert);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
