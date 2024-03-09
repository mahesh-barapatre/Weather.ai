const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const API_KEY = "a5f75eaf1905f8b2375a0ba961f96e5e";

// const CircularJSON = require('circular-json');
const cors = require('cors');

app.use(cors());

app.get(`/api/v1/getInfo`, async (req, res) => {
  try {
    let Data = {};
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=${API_KEY}`)
      .then(response => {
        // console.log(response.data);
        let weather = response.data.weather[0].main;
        let { temp, pressure, humidity } = response.data.main;
        let { visibility, name } = response.data;
        let { country } = response.data.sys;
        let { speed } = response.data.wind;
        let { lon, lat } = response.data.coord;
        

        let currentData = {
          weather, temp, pressure, humidity, visibility, name, country, speed, lon, lat
        }
        
        Data = {...Data, ...currentData}

        // res.status(200).json(currentData);
      })

    await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=mumbai&cnt=40&appid=${API_KEY}`)
      .then(response =>{
        // let list = response.data.list;
        let { list } = response.data
        let forecastData = [];
        // console.log(typeof(list));
        for (let i = 0; i < 40; i = i + 8){
          // console.log(list[i]);
          // console.log(typeof(list[i]), i);

            let { temp, humidity } = list[i].main;
          let weather = list[i].weather[0].main;
          let windSpeed = list[i].wind.speed;
          let date = list[i].dt_txt.substring(0,10);

          let dailyData = {
            temp, humidity, weather, windSpeed, date
          }
          forecastData.push(dailyData);
          // console.log(typeof(forecastData));
        }
        // console.log(forecastData);
        Data = {...Data, ...forecastData}
        res.status(200).json(Data);
      })
    
  } catch (error) {
    console.error('Error:', error.message);
    // res.status(500).json({ error: 'Internal Server Error' });
    res.status(500).json({ error: error.message });
  }
})


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
