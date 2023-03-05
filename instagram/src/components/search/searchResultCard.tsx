import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export interface SearchResult{
    userName:string;
    avatarURL:string;
    mainPageURL:string;
    isFollowed:boolean;
};

interface SearchCardProps{
    result:SearchResult;
}

export default function SearchResultCard(props:SearchCardProps){
    const result:SearchResult = props.result;

    const [isFollowed,setIsFollowed] = useState(result.isFollowed);
    const handleFollowingClicked = ()=>{
        setIsFollowed(false);
    };
    const handleFollowClicked=()=>{
        setIsFollowed(true);
    };

    useEffect(()=>{console.log(result.userName)});

    return (
        
            <div className="flex flex-row h-16 w-full hover:bg-slate-100 p-1">
                <div  className='h-16 w-4/6 no-underline'>
                    <div className="flex flex-row p-1 h-full w-full">
                        <img src={result.avatarURL} alt={result.userName} className="w-[40px] h-[40px] rounded-full hover:scale-105"/>
                        <div className="flex flex-col h-full w-[calc(100%-40px)]" >
                            <p className="h-1/2 w-full pl-3 pb-0 mb-0 font-semibold text-sm overflow-hidden">{result.userName}</p>
                            <p className="h-1/2 w-full pl-3 pb-3 font-light text-sm overflow-hidden">user description here aaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                        </div>
                    </div>
                </div>
                {isFollowed ? (
                    <button className="w-2/6 border-transparent bg-transparent text-gray-500 text-sm font-semibold" onClick={handleFollowingClicked}>Following</button> 
                ):(
                    <button className="w-2/6 border-transparent bg-transparent text-blue-600 text-sm font-semibold" onClick={handleFollowClicked}>Follow</button>
                )}
            </div>
       
    );

    /**add this after introducing route
     * <Link to={result.mainPageURL}  className='h-16 w-4/6 no-underline'>
                    <div className="flex flex-row p-1 h-full w-full">
                        <img src={result.avatarURL} alt={result.userName} className="w-[40px] h-[40px] rounded-full hover:scale-105"/>
                        <div className="flex flex-col h-full w-[calc(100%-40px)]" >
                            <p className="h-1/2 w-full pl-3 pb-0 mb-0 font-semibold text-sm overflow-hidden">{result.userName}</p>
                            <p className="h-1/2 w-full pl-3 pb-3 font-light text-sm overflow-hidden">user description here aaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                        </div>
                    </div>
                </Link>
     */
}