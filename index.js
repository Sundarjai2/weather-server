const express = require('express');
const app = express()
const port = 4500
const weatherData = [
  {
      "location": "chennai",
      "icon": "icon",
      "conditions": "cond",
      "temp": 30,
      "temp_max": 33,
      "temp_min": 28,
      "feels_like": 4,
      "wind_speed": 100,
      "wind_direction": 50,
      "pressure": 23,
      "humidity": 11
  },
  {
      "location": "bangalore",
      "icon": "icon",
      "conditions": "cond",
      "temp": 30,
      "temp_max": 33,
      "temp_min": 28,
      "feels_like": 4,
      "wind_speed": 100,
      "wind_direction": 50,
      "pressure": 23,
      "humidity": 11
  },
  {
      "location": "Mumbai",
      "icon": "icon",
      "conditions": "cond",
      "temp": 30,
      "temp_max": 33,
      "temp_min": 28,
      "feels_like": 4,
      "wind_speed": 100,
      "wind_direction": 50,
      "pressure": 23,
      "humidity": 11
  },
  {
      "location": "delhi",
      "icon": "icon",
      "conditions": "cond",
      "temp": 30,
      "temp_max": 33,
      "temp_min": 28,
      "feels_like": 4,
      "wind_speed": 100,
      "wind_direction": 50,
      "pressure": 23,
      "humidity": 11
  },
  {
      "location": "chicago",
      "icon": "icon",
      "conditions": "cond",
      "temp": 30,
      "temp_max": 33,
      "temp_min": 28,
      "feels_like": 4,
      "wind_speed": 100,
      "wind_direction": 50,
      "pressure": 23,
      "humidity": 11
  }
];

app.get('/getData', function(req, res){
     res.json(weatherData);
});

app.get('/getData/:queryData', function(req, res) {
  const query = req.query;
  const params = req.params;
  if (Object.keys(query).length === 0) {
    const queryFilter = filterCity(params);
    res.send(queryFilter);
  } else {
    const queryFilter = filterItems(query);
    res.send(queryFilter);
  }
})

app.get('/', (req, res) => {
  res.send(`Use http://localhost:${port}/getCity `);
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

function filterCity(data) {
  return weatherData.filter(weather => weather.location === data.queryData);
}

function filterItems(data) {
  return weatherData.reduce((previousValue, currentValue) => {
    const key = `locations`;
    const curValData = currentValue.location.includes(data.name);
    if (curValData) {
      (previousValue[key] = previousValue[key] || []).push(currentValue.location)
    }
    return previousValue;
  }, {});
}

