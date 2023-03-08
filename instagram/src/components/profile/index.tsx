import { useReducer, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from 'axios'
import Header from "./header";
import Photos from "./photos";
import { postType } from '../post/postType';


export default function Profile() {
  // let isUserSelf:boolean = false;
  const [isUserSelf, setIsUserSelf] = useState(false);
  const [posts, setPosts] = useState<postType[]>([]);
  let userid = "6406a22e3ec1592d94f1f2f4";

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
      const response = await axios.get(`http://www.localhost:8080/api/posts/${userid}`);
      setPosts(response.data);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div>
        <button onClick={() => setIsUserSelf(!isUserSelf)}>
          set setIsUserSelf
        </button>
      </div>
      <Header isUserSelf={isUserSelf} />
      <Photos isUserSelf={isUserSelf} />
    </>
  );
}
