import React,{useState} from 'react'
import Header from './header'
import Image from './image'
import Actions from './actions'
import Footer from './footer'
import Comments from './comments'
import AddComment from './add-comment'
import { postType } from './postType'
import Modal from './modal'

export default function Post(props:postType) {
  const [open, setOpen] = useState(false);
  // async function addPost() {
  //   const response = await fetch("http://localhost:5001/posts/new_post/",{
  //     method: "POST",
  //     body: JSON.stringify(newPost),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   });
  //   if (!response.ok) {
  //     const message = `An error occurred: ${response.statusText}`;
  //     window.alert(message);
  //     return;
  //   }
  //   const result = await response.json();
  //   console.log(result);
  // }

  return (
    <div>
        <div className="rounded col-span-4 border bg-white border-gray-primary mb-12">
        <Header username = {props.username} avatar={props.avatar} postDate={props.postDate}/>
        <Image imgUrls={props.imgUrls} caption="images" />
        <Actions likes = {props.likes} onComment={() => setOpen(true)}/>
        <Footer username={props.username} caption={props.caption} />
        <Comments comments={props.comments}/>
        <AddComment _id={props._id} username={props.username} onCreateComment={props.onCreateComment} avatar={props.avatar}/>
        <Modal _id={props._id} open={open} username = {props.username} caption={props.caption} likes={props.likes} avatar={props.avatar} postDate={props.postDate} comments={props.comments} imgUrls={props.imgUrls} onClose={() => setOpen(false)} onCreateComment={props.onCreateComment}/>
        </div>
    </div>
  )
}
