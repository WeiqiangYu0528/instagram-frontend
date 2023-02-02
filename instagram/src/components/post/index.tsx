import React from 'react'
import Header from './header'
import Image from './image'
import Actions from './actions'
import Footer from './footer'
import Comments from './comments'
import AddComment from './add-comment'

export default function Post() {
  return (
    <div>
        <div className="rounded col-span-4 border bg-white border-gray-primary mb-12">
        <Header/>
        <Image src="" caption="images" />
        <Actions/>
        <Footer/>
        <Comments/>
        <AddComment/>
        </div>
    </div>
  )
}
