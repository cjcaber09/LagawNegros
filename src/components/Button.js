import React from 'react'

export default function Button({label}) {
  return (
    <div className='w-full justify-center flex'>
        <a className='px-12 py-3 w-fit h-fit bg-background1 border cursor-pointer rounded-md text-primary place-items-center flex '>
            {label}
        </a>
    </div>

  )
}
