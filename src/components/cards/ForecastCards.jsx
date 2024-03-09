import { Icon } from '@iconify/react'
import React from 'react'

const ForecastCards = () => {
  return (
    <div className='flex w-1/12 bg-color-1 flex-col items-center space-y-2 m-1 py-2 px-3 rounded-2xl'>
      <div className=''>MON</div>
      <Icon className='' icon="ph:moon-fill" width="44" />
      <div className=''>27c</div>
    </div>
  )
}

export default ForecastCards