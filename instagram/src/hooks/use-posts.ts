import {useState, useEffect} from 'react';
import { usePostsType } from './hooksType'; 

export default function usePosts(): usePostsType{
    const [posts, setPosts] = useState(null);



    return posts;
    // async function listAllPosts(client: any){
    //     const results = await client.db("instagram").collection("posts").find({});
    //     console.log(results);
    // }
}


    
