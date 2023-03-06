import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import Post from './post'
import { postType } from './post/postType';
import { timelineType } from './types';
// import api from '../api/axiosConfig'

export default function Timeline(props:timelineType) {

  
  return (
    <div className="container col-span-2 mx-20">
    <Skeleton count={2} width={640} height={500} className="mb-5"/>
    {/* <p className='text-center text-2xl'>Follow people to see photos!</p> */}
    {props.posts && props.posts.map((post:postType, inx ) => <Post key={post._id} _id={post._id} username={post.username} likes={post.likes} caption={post.caption} comments={post.comments} avatar={post.avatar} imgUrls={post.imgUrls} postDate={post.postDate} onCreateComment={props.onCreateComment} />)}
    <p className='text-xl'>Hello World!</p>
    </div>
  )
}

