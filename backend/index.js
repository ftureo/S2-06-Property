import express from "express";
import conectarDb from "./src/config/db.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

conectarDb();

// Setting
app.set("port", 3000);

// Starting de server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
