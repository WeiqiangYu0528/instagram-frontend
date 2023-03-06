import React,{useEffect, useState} from 'react'
import Suggestions from '../components/suggestions/suggestions'
import Timeline from '../components/timeline'
import Sidebar from '../components/sidebar/sidebar'
import axios from 'axios'

export default function Dashboard() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  },[]
  );
  
  async function getPosts() {
        try{
          const response = await axios.get("http://www.localhost:8080/api/posts");
          setPosts(response.data);
          console.log(response.data);
        }
        catch(err){
          console.error(err);
        }
  }

  return (
    <div className='bg-gray-background'>
        <div className='grid grid-cols-5 gap-12 max-w-screen-2xl'>
            <Sidebar onCreatePost={() => getPosts()}/>
            <Timeline posts={posts} onCreateComment={() => getPosts()}/>
            <Suggestions/>
        </div>
    </div>
  )
}
