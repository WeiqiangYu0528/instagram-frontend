import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function User() {
  return (
    <div>
        <Skeleton count={1} height={61}/>
        <div className="grid grid-cols-4 gap-4 mb-6 items-center">
            <div className='flex items-center justify-between col-span-1'>
                <img className='rounded-full w-16 h-16 flex mr-3' src="./images/avatars/cat.jpg" alt="" />
            </div>
            <div className="col-span-3">
                <p className="font-bold text-sm">Alex Sarah</p>
                <p className="text-sm">Bob Alice</p>
            
            </div>
        </div>

    </div>
  )
}
