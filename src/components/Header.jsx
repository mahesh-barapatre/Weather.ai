import { Icon } from '@iconify/react'
import React from 'react'

const Header = () => {
  return (
      <div className='bg-black fixed top-0 w-full h-20 flex justify-around items-center'>
          <div className='flex items-center'>
              <Icon icon="fluent:weather-cloudy-48-filled" width="48" height="48" />
              <span className="font-bold text-lg">WeatherForcast.ai</span>
          </div>
          <div className='w-1/3 flex items-center bg-color-1 rounded-3xl p-2 space-x-2'>
              <Icon icon="ic:outline-search" width="32" />
              <input type="text" placeholder='Search city...' className="bg-color-1 w-full"/>
          </div>
          <div className='bg-gray-800 flex items-center p-2 rounded-3xl space-x-2'>
              <Icon icon="line-md:my-location-loop" width="24" height="24" />
              <span className='text-sm'>Current Location</span>
          </div>
    </div>
  )
}

export default Header