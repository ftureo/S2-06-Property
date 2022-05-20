import express from "express";

const app = express();

// Setting
app.set("port", 3000);

// Starting de server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
