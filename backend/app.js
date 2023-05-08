const express = require("express");
const connectDB = require("./config/connection");

const app = express();

//database connection

connectDB();

// Middleware
app.use(express.json());
app.use("/api/contacts", require("./routes/contact"));

port = 5000;

app.listen(port, () => console.log(`server run on port ${port}`));
