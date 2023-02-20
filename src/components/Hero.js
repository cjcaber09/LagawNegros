import React from 'react'
import Button from './Button'
import HeroBoxes from './HeroBoxes'
export default function Hero() {
  return (
    <div className='w-full h-screen flex justify-center place-items-center'>
        <div className='text-center'>
            <div className=' text-4xl '>
            Travel and enjoy your stay in
            </div>
            <div className='text-[10rem] '>
                Negros Island
            </div>
            <Button label="Browse Destinations"/>
            <div id='boxes ' className='flex justify-center gap-4 mt-8'>
                <HeroBoxes title="Users" number="420"/>
                <HeroBoxes title="Destinations" number="57"/>
            </div>
        </div>
        
    </div>
  )
}
