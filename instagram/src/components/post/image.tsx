import React from 'react'

type imageType = {
    src:string,
    caption: string,
}

export default function Image({src, caption} : imageType) {
  return (
    <div>
        <img src="./images/avatars/cat2.jpg" alt={caption} />
    </div>
  )
}
