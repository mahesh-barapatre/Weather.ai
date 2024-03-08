import { Icon } from '@iconify/react'
import React from 'react'

const ForecastCard = () => {
  return (
    <div className='flex bg-color-1 justify-around items-center w-full'>
      <div className="flex items-center space-x-1">
        <Icon icon="ph:moon-fill" width="24" />
        <span className='font-semibold text-lg'>20C</span>
      </div>
      <span className='text-xs tx-color-2'>03 march</span>
      <span className='text-xs tx-color-2'>friday</span>
    </div>
  )
}

export default ForecastCard