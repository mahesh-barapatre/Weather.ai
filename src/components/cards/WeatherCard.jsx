// WeatherCard.js

import React from 'react';

const WeatherCard = ({ data }) => {
  const { temperature, humidity, windSpeed, weatherCondition, icon } = data;

  return (
    <div className="bg-color-1 text-white p-2 rounded-2xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">{weatherCondition}</h2>
        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather Icon" className="w-8 h-8" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <p className="text-sm">Temperature</p>
          <p className="text-xl font-bold">{temperature} °C</p>
        </div>
        <div>
          <p className="text-sm">Humidity</p>
          <p className="text-xl font-bold">{humidity}%</p>
        </div>
        <div>
          <p className="text-sm">Wind Speed</p>
          <p className="text-xl font-bold">{windSpeed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
