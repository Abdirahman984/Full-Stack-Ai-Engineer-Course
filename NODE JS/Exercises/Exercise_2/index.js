const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose')

const getBooks = require('../Routes/bookRouter')

const app = express();

app.use(express.json())

app.use('/', getBooks)


mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("✅ mongoose is connected successfully"))
    .catch((err) => console.log("❌ mongoose is not connected server error", err))

app.listen(3000, () => {
    console.log("server is runing at http//localhost:3000")
})





