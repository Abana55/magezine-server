require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

const articleRoutes = require("./routes/articleRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/articles", articleRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
