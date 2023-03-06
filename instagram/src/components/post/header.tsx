import React,{useContext} from 'react'
import { postHeader } from './postType'
import { formatDistanceToNowStrict } from 'date-fns'
import UserContext from '../../contexts/user-context';

export default function Header(props:postHeader) {
  const {username} = useContext(UserContext);
  return (
    <div className="flex border-b border-gray-primary h-4 p-4 py-8">
        <div className="flex items-center">
            <img className="rounded-full h-8 w-8 flex wr-3" src={props.avatar} alt="" />
            <p className="text-sm font-bold ml-3">{username}</p>
            <span className="text-sm text-gray-base ml-3">{formatDistanceToNowStrict(new Date(props.postDate))}</span>
            <span className="text-sm font-bold text-blue-medium ml-3">Follow</span>
        </div>
        </div>
  )
}