import express from "express";
import conectarDb from "./src/config/db.js";
import dotenv from "dotenv";
import globalErrorHandler from "./src/middleware/error.middleware.js";
import router from "./src/routes/user.routes.js";

const app = express();

dotenv.config({ path: "./config.env" });

app.use(express.json());

app.use("/api/user", router);

app.use(globalErrorHandler);

conectarDb();

// Setting
app.set("port", 3000);

// Starting de server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
