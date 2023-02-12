import React from "react";

export default function UserProfile() {
  return (
    <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
      <div className="container flex justify-center items-center">
        <img
          className="rounded-full h-40 w-40 flex"
          src="./images/avatars/cat.jpg"
          alt="profile pic"
        />
      </div>
      <div className="flex items-center justify-center flex-col col-span-2">
        <div className="container flex items-center">
          <p className="text-2xl mr-4">ken</p>
          <button
            className=" bg-gray-300 font-bold text-sm rounded w-20 h-8"
            type="button"
          >
            Follow
          </button>
          <button
            className=" bg-gray-300 font-bold text-sm rounded w-20 h-8 ml-2"
            type="button"
          >
            Message
          </button>

          <svg
            aria-label="Options"
            color="#262626"
            fill="#262626"
            height="32"
            role="img"
            viewBox="0 0 24 24"
            width="32"
            className="ml-2 cursor-pointer"
          >
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="18" cy="12" r="1.5"></circle>
          </svg>
        </div>
        <div className="container flex mt-4">
          <p className="mr-10">
            <span className="font-bold">photosCount</span> posts
          </p>
          <p className="mr-10 cursor-pointer">
            <span className="font-bold">followerCount</span>
            {` `}
            {/* {followerCount === 1 ? `follower` : `followers`} */}
            follower
          </p>
          <p className="mr-10 cursor-pointer">
            <span className="font-bold">following num</span> following
          </p>
        </div>
        <div className="container mt-4">
          <p className="font-medium">fullName</p>
        </div>
      </div>
    </div>
  );
}
