import React from 'react'
import Skeleton from 'react-loading-skeleton'
import Post from './post'

export default function Timeline() {
  return (
    <div className="container col-span-2 mx-auto">
    {/* <Skeleton count={4} width={640} height={500} className="mb-5"/> */}
    {/* <p className='text-center text-2xl'>Follow people to see photos!</p> */}
     <Post/>
     <Post/>
    </div>
   
  )
}
