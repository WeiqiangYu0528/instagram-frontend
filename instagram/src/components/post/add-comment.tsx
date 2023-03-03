import React, { useState } from 'react'
import { postAddComment } from './postType';
import axios from 'axios';

export default function AddComment(props: postAddComment) {
  const [comment, setComment] = useState("");
  const newComment = {
    username: props.username,
    comment: comment,
    avatar: props.avatar,
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addComment();
    setComment("");
  }

  async function addComment() {
    const response = await axios.post("http://localhost:8080/api/posts",newComment)
          .then(function(response){
            console.log(response);
          })
          .catch(function(err){
            console.error(err);
          });
    props.onCreateComment();
  }
  
  return (
    <div className='border-t border-gray-primary'>
        <form className='flex justify-between pl-0 pr-5' method='POST' onSubmit={handleSubmit}>
        <input data-testid="input-comment" type="text" aria-label='Add a comment' autoComplete='off' className='text-sm text-gray-base w-full mr-3 py-5 px-4'
        name='add-comment' placeholder='Add a comment' value={comment} onChange={(e) => setComment(e.target.value) }/>
        {comment !== "" && <button className="text-sm font-bold text-blue-medium" data-testid="post-button" type='submit'>POST</button>}
        </form>
    </div>
  )
}



