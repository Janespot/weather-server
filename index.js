const express = require('express');
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.get("/weather", async(req, res) => {
    const { city } = req.query;
    const apiKey = process.env.WEATHER_API_KEY;

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        res.json(response.data);
    } catch(error) {
        console.log(error);
        res.status(500).json();
    }
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));