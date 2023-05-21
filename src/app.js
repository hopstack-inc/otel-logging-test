import { startSDK } from "./instrumentation";

import express from "express";
import logger from "./logger";

startSDK();

//  making random changes
const PORT = parseInt(process.env.PORT || "8080");
const app = express();

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

app.get("/rolldice", (req, res) => {
  logger.info("Rolling dice");
  logger.info("Getting information");
  const error = new Error("Error in getting information");
  logger.error(error);
  res.send(getRandomNumber(1, 6).toString());
});

app.listen(PORT, () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});
