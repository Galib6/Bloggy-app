import Link from "next/link";
import React from "react";

const PostCard = ({ post }) => {
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
        <p className="leading-relaxed mb-2">Catagory: Life Lession</p>
        <p className="leading-relaxed mb-8">Posted at:{post?.createdAt}</p>
        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
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
