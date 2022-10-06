require("dotenv").config({ path: "./config.env" });
const express = require('express')
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(require("./routes/record"));

app.listen(PORT, () => console.log('server started'))

// https://www.mongodb.com/docs/atlas/cli/stable/install-atlas-cli/