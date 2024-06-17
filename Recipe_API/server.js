const { configDotenv } = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/userRoutes");
const recipeRoutes = require ("./Routes/recipeRoutes");
const typeRoutes = require ("./Routes/typeRoutes");
const cors = require ("cors");
configDotenv();
const app = express();
const port = process.env.PORT || 5001;
MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use (cors());
// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));
  app.use("/users", userRoutes);
  app.use("/type", typeRoutes);
  app.use ("/recipe", recipeRoutes);
app.listen(port, () => console.log(`Listening on port ${port}...`));
