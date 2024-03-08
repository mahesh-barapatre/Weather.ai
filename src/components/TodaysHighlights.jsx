import React from 'react'
import InfoCard from './cards/InfoCard'
import HourlyTempCard from './cards/HourlyTempCard'

const TodaysHighlights = () => {
  return (
      <div className='w-full'>
          <div className='bg-color-1 p-3 m-4 rounded-2xl'>
              <h4>Today's Highlights</h4>
              <InfoCard />
              
          </div>
          <div className='flex p-3 m-4' >
          <HourlyTempCard />
          <HourlyTempCard />
          </div>
          
    </div>
  )
}

export default TodaysHighlights