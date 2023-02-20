import React from 'react'

export default function HeroBoxes({title , number}) {
  return (
    <div className='flex p-2 w-72 bg-background1'>
        <div className='icon  w-24 h-24'>

        </div>
        <div className='hb-content text-left self-center ml-2 mr-8 text-primary'>
            <p className='text-2xl font-bold'>{number}</p>
            <p className='text-lg font-medium '>{title}</p>
        </div>
    </div>
  )
}
