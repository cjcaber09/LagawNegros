import React from 'react'
import { Outlet } from 'react-router-dom'

export default function layout() {
  return (
    <div className='h-screen bg-background2'>
        <div className='h-16 bg-background1'>
            <div className='head-wrapper px-20 py-4 flex text-text'>
                <div className='w-1/4 '>Logo</div>
                <div className='w-1/2 flex justify-center'>
                    <div className=' flex justify-center w-full text-text'>
                        <input className='px-3 py-1 bg-searchbox border border-background1 focus:border-background1 focus:ring-2 focus:ring-searchbox focus:outline-none w-full rounded-md'></input>
                    </div>
                </div>
                <div className='w-1/4 flex justify-end uppercase text-sm pt-2 gap-6'>
                    <div className=' tracking-[0.2em] hover:text-hoveredText font-bold'>Travel</div>
                    <div  className='tracking-[0.2em] hover:text-hoveredText font-bold'>Random</div>
                    <div  className='tracking-[0.2em] hover:text-hoveredText font-bold'>Sign in </div>
                </div>
            </div>
        </div>
        <div className='main-wrapper mx-8'>
        <Outlet/>
        </div>
    </div>
  )
}
