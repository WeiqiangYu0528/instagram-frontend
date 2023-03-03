import React from 'react'
import { postModalComment } from './postType'
import { formatDistanceToNowStrict } from 'date-fns'

export default function ModalComment(props:postModalComment) {
  
  return (
    <div className="h-4 p-4 py-8 h-3/5">
        <div className="flex items-center">
            <img className="rounded-full h-8 w-8 flex wr-3" src={props.avatar} alt="" />
            <span className="text-sm font-bold ml-3">{props.username}</span>
            <span className="text-sm ml-3">{props.caption}</span>
            {/* <span className="text-sm text-gray-base ml-3">{formatDistanceToNowStrict(new Date(props.postDate))}</span> */}
            {/* <span className="text-sm font-bold text-blue-medium ml-3">Follow</span> */}
        </div>
        {props.comments && props.comments.map((comment) => {
          return (
            <div className="flex items-center mt-8">
            <img className="rounded-full h-8 w-8 flex wr-3" src={comment.avatar} alt="" />
            <span className="text-sm font-bold ml-3">{comment.username}</span>
            <span className="text-sm ml-3">{comment.comment}</span>
            {/* <span className="text-sm text-gray-base ml-3">{formatDistanceToNowStrict(new Date(props.postDate))}</span> */}
            {/* <span className="text-sm font-bold text-blue-medium ml-3">Follow</span> */}
        </div>
          );
        })}
    </div>
  )
}