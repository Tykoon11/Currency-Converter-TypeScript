import express from "express";
import axios from "axios";

const convert = express.Router();

convert.get("/", async (req: express.Request, res: express.Response) => {
  try {
    const BASE_URL = process.env.BASE_URL as string;
    axios
      .get(BASE_URL)
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
    res.send(`Could not fetch data from API`);
  }
});

export default convert;
