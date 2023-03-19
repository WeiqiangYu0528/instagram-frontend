import React from 'react'
import { postModalComment } from './postType'
import { formatDistanceToNowStrict } from 'date-fns'

export default function ModalComment(props: postModalComment) {
  const imgsrc = props.avatar === undefined ? "/images/avatars/default_avatar.jpg" : "data:image/png;base64, " + props.avatar.data.data;

  return (
    <div className="p-4 py-8 h-[95%] overflow-y-auto">
      <div className="flex items-center">
        <img className="rounded-full h-8 w-8 flex wr-3" src={imgsrc} alt="" />
        <div>
          <p>
            <span className="text-sm font-bold ml-3">{props.username}</span>
            <span className="text-sm ml-3">{props.caption}</span>
          </p>
          <p><span className="text-xs text-gray ml-3" >{formatDistanceToNowStrict(new Date(props.time_created))}</span></p>
        </div>

        {/* <span className="text-sm text-gray-base ml-3">{formatDistanceToNowStrict(new Date(props.postDate))}</span> */}
        {/* <span className="text-sm font-bold text-blue-medium ml-3">Follow</span> */}
      </div>
      {props.comments && props.comments.map((comment) => {
        const commentAvatar = comment.avatar === undefined ? "/images/avatars/default_avatar.jpg" : "data:image/png;base64, " + comment.avatar.data.data
        return (
          <div className="items-center mt-8 flex justify-between">
            <div className='flex items-center'>
              <img className="rounded-full h-8 w-8 wr-3" src={commentAvatar} alt="" />
              <div>
                <p>
                  <span className="text-sm font-bold ml-3">{comment.username}</span>
                  <span className="text-sm ml-3">{comment.comment}</span>
                </p>
                <p >
                  <span className="text-xs text-gray ml-3" >{formatDistanceToNowStrict(new Date(comment.time_created))}</span>
                  <span className="text-xs ml-3 text-gray font-bold">0 likes</span>
                  <span className="text-xs ml-3 text-gray font-bold">Reply</span>

                </p>
              </div>
            </div>
            <div className='flex items-center'>
              <svg aria-label="Like" className="x1lliihq x1n2onr6" color="rgb(142, 142, 142)" fill="rgb(142, 142, 142)" height="12" role="img" viewBox="0 0 24 24" width="12"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
            </div>
            {/* <span className="text-sm font-bold text-blue-medium ml-3">Follow</span> */}
          </div>
        );
      })}
    </div>
  )
}