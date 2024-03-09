import { Icon } from '@iconify/react'
import React from 'react'

const InfoCard = () => {
  return (
      <div className='bg-color-2 rounded-xl p-3 w-1/5 space-y-2 m-2'>
          <div className='tx-color-2 text-xs'>Humidity</div> 
          <div className='flex font-semibold w-full justify-evenly items-center'>
              <Icon icon="material-symbols:humidity-percentage-rounded" width="40" />
              <div className='text-2xl'>43%</div>
          </div>
    </div>
  )
}

export default InfoCard