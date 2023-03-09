import { lazy, useReducer, useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/profile/header";
import Photos from "../components/profile/photos";
import { postType } from "../components/post/postType";
import Sidebar from "../components/sidebar/sidebar";

export default function Profile() {
  // let isUserSelf:boolean = false;
  const [isUserSelf, setIsUserSelf] = useState(false);
  const [posts, setPosts] = useState<postType[]>([]);
  let userid = "6406a22e3ec1592d94f1f2f4";

  // const Header = lazy(() => import('../components/profile/header'));
  // const Photos = lazy(() => import('../components/profile/photos'));

  useEffect(() => {
    // if (username === "") {
    //   navigate(ROUTES.LOGIN);
    // } else {
    //   getPosts();
    // }
    getPosts();
  }, []);

  async function getPosts() {
    try {
      await axios
        .get(`http://www.localhost:8080/api/posts/${userid}`)
        .then((res) => {
          setPosts(res.data);
          console.log(res.data);
        });
    } catch (err) {
      console.error(err);
    }
  }

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
