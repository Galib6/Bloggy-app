import Link from "next/link";
import React, { useEffect, useState } from "react";

const PostCard = ({ post }) => {
  const [comments, setComments] = useState([]);
  const postSummery = `<div>${post?.postDes.slice(0, 130)}...</div>`;

  useEffect(() => {
    fetch(`http://localhost:3000/api/postcomments/${post._id}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div className="flex space-x-8  px-6 py-6 shadow-lg">
      <div>
        <img
          src={post.coverPic}
          alt=""
          className="w-[400px] h-[300px] object-cover mr-5 rounded-lg"
        />
      </div>
      <div className="flex flex-col items-start">
        <Link href={`/postDetails/${post._id}`}>
          <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
            {post?.postTitle}
          </h2>
        </Link>
        <div
          className="quill-content"
          dangerouslySetInnerHTML={{ __html: postSummery }}
        ></div>
        <div className="flex items-center justify-between flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <Link
            href={`/postDetails/${post._id}`}
            className="text-indigo-500 inline-flex items-center"
          >
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
          <span class="text-gray-400 inline-flex items-center leading-none text-sm mr-5 ">
            <svg
              class="w-6 h-6 mr-1"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
            {comments?.length}
          </span>
        </div>
        <a className="inline-flex items-center">
          <img
            alt="blog"
            src={post.profilePic}
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
          />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-900">
              {post?.authorName}
            </span>
            <span className="text-gray-400 text-xs tracking-widest mt-0.5">
              Author
            </span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default PostCard;
