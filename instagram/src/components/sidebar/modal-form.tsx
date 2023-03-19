import React,{useContext} from 'react'
import UserContext from '../../contexts/user-context';
import { modelFormType } from './sidebarType'

export default function ModalForm(props:modelFormType) {
    const {user} = useContext(UserContext);
    return (
        <div className='flex col-span-1'>
            <div className="p-4">
                <div className="flex">
                    <img className="rounded-full h-8 w-8 flex wr-3 " src={user.avatar} alt="" />
                    <p className="text-sm font-bold ml-3">{user.username}</p>
                </div>
                <textarea data-testid="input-text" className='mt-3 focus:outline-none' onChange={(e) => props.setCaption(e.target.value)} value={props.caption} rows={10} cols={32} placeholder='Write a caption...' ></textarea>
            </div>
        </div>
    )
}
