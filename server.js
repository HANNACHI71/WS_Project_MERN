const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json()); // to parse the JSON bodies

// connexion database
const connectDB = require("./Config/connectDB");
connectDB();

//  creation contact
app.use("/api/contact", require("./Routes/contact"));

const PORT = process.env.PORT;

app.listen(PORT, (error) => {
  error
    ? console.log(`fail to connect ${error} `)
    : console.log(`Server is running on port ${PORT}`);
});
