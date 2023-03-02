/* eslint-disable no-nested-ternary */
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

export default function Photos({isUserSelf}:{isUserSelf:boolean}) {
  var photos: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="h-16 border-t border-gray-primary mt-12 pt-4">
      
      <div className="flex items-center justify-center flex-row">
        <button className="mr-10">POSTS</button>
        {isUserSelf ? <button className="mr-10">SAVED</button> : <></>}
        <button>TAGGED</button>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-4 mb-12">
        {photos.map(() => (
          <div className="relative group">
            <img src="./images/avatars/cat.jpg" alt="profile pic" />

            <div className="absolute bottom-0 left-0  z-10 w-full justify-evenly items-center h-full bg-neutral-800/50 group-hover:flex hidden">
              <p className="flex items-center text-white font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-8 mr-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                photo.likes.length
              </p>

              <p className="flex items-center text-white font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-8 mr-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
                photo.comments.length
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Photos.propTypes = {
  photos: PropTypes.array,
};
