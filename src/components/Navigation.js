import React from 'react'

export default function Navigation() {
  return (
    <div className='h-20 fixed bg-primary w-full px-16 shadow-md flex place-items-center' >
        <div className='flex-1'></div>
        <div className='flex-auto flex gap-16 justify-center uppercase'>
            <div>Home</div>
            <div>About Us</div>
            <div className='w-20 flex justify-center'>Logo</div>
            <div>Destination</div>
            <div>Posts</div>
        </div>
        <div className='flex-auto flex justify-end'>Sign In</div>
    </div>
  )
}
