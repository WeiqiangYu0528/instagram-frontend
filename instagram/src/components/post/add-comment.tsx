import React from 'react'

export default function AddComment() {
  const show = true;
  return (
    <div className='border-t border-gray-primary'>
        <form className='flex justify-between pl-0 pr-5' method='POST'>
        <input type="text" aria-label='Add a comment' autoComplete='off' className='text-sm text-gray-base w-full mr-3 py-5 px-4'
        name='add-comment' placeholder='Add a comment'/>
        {show && <button className="text-sm font-bold text-blue-medium" type='button'>POST</button>}
        </form>
    </div>
  )
}
