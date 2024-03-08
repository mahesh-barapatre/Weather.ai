import { Icon } from '@iconify/react'
import React from 'react'
import ForecastCard from './cards/ForecastCard'

const BasicForecast = () => {
  return (
      <div className='flex flex-col m-2 w-3/12'>
          <div className='bg-color-1 p-6 m-2 rounded-2xl space-y-3'>
              <span>Now</span>
              <div className='flex space-x-4'>
                  <span className="text-bold text-6xl">19C</span>
                  <Icon icon="fluent:weather-moon-24-filled" width="52" />
              </div>
              <div className='text-sm'>Clear sky</div>
              <div className='w-full border '></div>
              <div className='flex items-center'>
                  <Icon icon="uil:calender" width="16" />
                  <span className="text-sm text-gray-400">Thursday,02 march</span>
              </div>
              <div className='flex items-center'>
                  <Icon icon="mdi:location" width="16" />
                  <span className="text-sm text-gray-400">Garhchiroli,mh</span>
              </div>
          </div>

          <h4 className='m-2 font-semibold'>5 Day Forecast</h4>

          <div className='flex items-center flex-col bg-color-1 rounded-2xl space-y-3 px-3 py-4 m-2'>
              <ForecastCard />
              <ForecastCard />
              <ForecastCard />
              <ForecastCard />
              <ForecastCard />
              
          </div>
    </div>
  )
}

export default BasicForecast