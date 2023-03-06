import React from 'react'
import { postFooter } from './postType'

export default function Footer(props: postFooter) {
  return (
    <div className = "p-4 pt-2 pb-0">
        <span className="mr-1 font-bold">{props.username}</span>
        <span>{props.caption}</span>
    </div>
  )
}
