import React from "react";

const SingleComment = ({ comment }) => {
  return (
    <div className="p-4 ">
      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
        <div className="flex items-center mb-3">
          {comment?.photo ? (
            <div className="avatar mr-3">
              <div className="w-8 rounded-full">
                <img src={comment.photo} />
              </div>
            </div>
          ) : (
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          )}
          <div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              {comment.name}
            </h2>
            <p className="text-[12px] font-semibold mt-[-5px]">
              {comment?.date?.slice(4, 15)}
            </p>
          </div>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base">{comment.review}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
