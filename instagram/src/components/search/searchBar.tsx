import { useState,useEffect } from "react";
import SearchResultCard,{SearchResult} from './searchResultCard'

const sampleCards : SearchResult[] = [
    {userName:'user1',avatarURL:'./images/avatars/role11.jpg',mainPageURL:'/1',isFollowed:true},
    {userName:'user2',avatarURL:'./images/avatars/role12.jpg',mainPageURL:'/2',isFollowed:true},
    {userName:'user3',avatarURL:'./images/avatars/role13.jpg',mainPageURL:'/',isFollowed:false},
    {userName:'user4',avatarURL:'./images/avatars/role11.jpg',mainPageURL:'/',isFollowed:true},
    {userName:'user5',avatarURL:'./images/avatars/role12.jpg',mainPageURL:'/',isFollowed:true},
    {userName:'user6',avatarURL:'./images/avatars/role13.jpg',mainPageURL:'/',isFollowed:false},
    {userName:'user7',avatarURL:'./images/avatars/role11.jpg',mainPageURL:'/',isFollowed:true},
    {userName:'user8',avatarURL:'./images/avatars/role12.jpg',mainPageURL:'/',isFollowed:true},
    {userName:'user9',avatarURL:'./images/avatars/role13.jpg',mainPageURL:'/',isFollowed:false},
    {userName:'user10',avatarURL:'./images/avatars/role11.jpg',mainPageURL:'/',isFollowed:true},
    {userName:'user11',avatarURL:'./images/avatars/role12.jpg',mainPageURL:'/',isFollowed:true},
    {userName:'user12',avatarURL:'./images/avatars/role13.jpg',mainPageURL:'/',isFollowed:false},
    {userName:'user13',avatarURL:'./images/avatars/role11.jpg',mainPageURL:'/',isFollowed:true},
    {userName:'user14',avatarURL:'./images/avatars/role12.jpg',mainPageURL:'/',isFollowed:true},
    {userName:'user15',avatarURL:'./images/avatars/role13.jpg',mainPageURL:'/',isFollowed:false},
    {userName:'user16',avatarURL:'./images/avatars/role11.jpg',mainPageURL:'/',isFollowed:true},
    {userName:'user17',avatarURL:'./images/avatars/role12.jpg',mainPageURL:'/',isFollowed:true},
    {userName:'user18',avatarURL:'./images/avatars/role13.jpg',mainPageURL:'/',isFollowed:false},
];

export interface keyWordsBag{
    keywords:string[];
};

export default function SearchBar(){
    const [inputValue,setInputValue] = useState("");
    const [resultCards,setResultCards] = useState<SearchResult[]>([]);
    
    const handleKeyWordsConfirmed=()=>{
        resultCards.length=0;
        let keyWords:string[] = inputValue.trim().replace(/\s\s+/g, ' ').split(' ');
        console.log("handle key words confirmed")
        sampleCards.map((result)=>{
            const userName = result.userName;
            
            for(const keyword of keyWords){
                if(userName.match(keyword)){
                    setResultCards((resultCards)=>[...resultCards,result])
                    break;
                }
            }
        });
    };

    console.log("rerender")

    return (
        <div className='flex flex-col pl-2 pr-2 bg-white border-slate-150 h-screen w-96 border-r border-l rounded-r-[1rem]'>
            
            <div className="pt-6 pb-8">
                <p className="font-medium text-2xl font-sans">Search</p>
            </div> 

            <form className="searchForm bg-gray-100 " onSubmit={e => { e.preventDefault();}}>
                <input type="search" onChange={(event) => setInputValue(event.target.value)} onKeyDown={(event)=>{if(event.key==='Enter')handleKeyWordsConfirmed();}} placeholder="Search" className="searchBox outline-none bg-transparent focus:border-tranparent"/>
                <button type="button" className="searchButton" onClick={handleKeyWordsConfirmed}>Submit</button>
            </form>
            <div className="pt-6"></div>
            
            <div className="overflow-y-scroll w-full border-t-2 border-slate-150">
                {resultCards.map((result)=>{
                    return (
                        <SearchResultCard result={result}/>                  
                    );
                })}
            </div>
            
            
            
        </div>
    );
}