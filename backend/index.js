require("dotenv").config({ path: "./config.env" });
const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 8080
const dbo = require('./db/conn')

app.use(cors())
app.use(express.json())

app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
      if (err) console.error(err);
   
    });
    console.log(`Server is running on port: ${port}`);
});
// https://www.mongodb.com/docs/atlas/cli/stable/install-atlas-cli/