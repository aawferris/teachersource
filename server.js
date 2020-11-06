const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const lessonsRoutes = require("./routes/lessons");
const usersRoutes = require("./routes/users");
const db = require("./db/connection");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

app.get("/", (req, res) => res.send("This is root!"));
app.use("/api", lessonsRoutes); // perhaps need to comma separate line 18 here
app.use("/api", usersRoutes);

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
