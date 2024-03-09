import React from 'react'
import InfoCard from './cards/InfoCard'
import HourlyTempCard from './cards/HourlyTempCard'
import ForecastCards from './cards/ForecastCards'
import WeatherCard from './cards/WeatherCard'
import FavoriteLocationCard from './cards/FavouriteLocationCard'

const TodaysHighlights = () => {

  const weatherData = {
    temperature: 25,
    humidity: 65,
    windSpeed: 3,
    weatherCondition: 'Sunny',
    icon: '01d', // Replace with the actual icon code from the API response
  };

  const favoriteCityData = {
    cityName: 'Your Favorite City',
    latitude: 35.6895, // Example latitude for the favorite city
    longitude: 139.6917, // Example longitude for the favorite city
    // Add more details as needed
  };

  return (
      <div className='w-full'>
              <p className='text-lg'>Today's Highlights</p>
          <div className='bg-color-1 p-3 m-4 rounded-2xl flex flex-wrap'>
              <InfoCard />
              <InfoCard />
              <InfoCard />
              <InfoCard />
              <InfoCard />
              <InfoCard />
              <InfoCard />
              
      </div>
      <p className='text-lg'>Weather Forecast</p>
          <div className='flex p-3 m-2 justify-between' >
          {/* <HourlyTempCard />
        <HourlyTempCard />
        <ForecastCards /> */}
        <WeatherCard data={weatherData} />
        <WeatherCard data={weatherData} />
        <WeatherCard data={weatherData} />
        <WeatherCard data={weatherData} />
        <WeatherCard data={weatherData} />

        
          </div>
        {/* <FavoriteLocationCard /> */}
          
    </div>
  )
}

export default TodaysHighlights