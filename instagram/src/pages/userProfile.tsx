import { lazy, useContext, useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/profile/header";
import Photos from "../components/profile/photos";
import { postType } from "../components/post/postType";
import Sidebar from "../components/sidebar/sidebar";
import UserContext from "../contexts/user-context";

export default function Profile() {
  // let isUserSelf:boolean = false;
  const {username} = useContext(UserContext);
  const [isUserSelf, setIsUserSelf] = useState(false);
  const [posts, setPosts] = useState<postType[]>([]);

  async function getUserPosts() {
    try{
      const response = await axios.get(`http://www.localhost:8080/api/posts/${username}`);
      setPosts(response.data);
      console.log(response.data);
    }
    catch(err){
      console.error(err);
    }
};

async function getPosts() {
  try{
    const response = await axios.get("http://www.localhost:8080/api/posts");
    setPosts(response.data);
    console.log(response.data);
  }
  catch(err){
    console.error(err);
  }
};

useEffect(
  () => {
    getUserPosts();
  }
  ,[]);

  return (
    <>
      <div className="bg-gray-background">
        <div className="grid grid-cols-5 gap-12 ">
          <div className="col-span-1">
            <Sidebar onCreatePost={() => getPosts()} />
          </div>

          <div className="col-span-4 flex flex-col max-w-screen-2xl">
            <button onClick={() => setIsUserSelf(!isUserSelf)}>set user</button>
            <Header isUserSelf={isUserSelf} postCount={posts.length} />
            <Photos isUserSelf={isUserSelf} posts={posts} />
          </div>
        </div>
      </div>
    </>
  );
}
