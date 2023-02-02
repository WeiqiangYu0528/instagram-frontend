import React from 'react'
import Header from '../components/header'
import Suggestions from '../components/suggestions/suggestions'
import Timeline from '../components/timeline'
import Sidebar from '../components/sidebar'

export default function Dashboard() {
  return (
    <div className='bg-gray-background'>
        {/* <Header/> */}
        <div className='grid grid-cols-4 gap-10 max-w-screen-xl '>
            <Sidebar/>
            <Timeline/>
            <Suggestions/>
        </div>
        
    </div>
  )
}
