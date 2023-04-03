import { useRouter } from "next/router";
import React from "react";
import Reviews from "./Reviews";
import LeaveComment from "./leaveComment";
import { toast } from "react-toastify";
import Link from "next/link";

const Postdetails = ({ data, comments }) => {
  const router = useRouter();
  const {
    postTitle,
    createdAt,
    postDes,
    authorName,
    _id,
    profilePic,
    coverPic,
  } = data;
  const postDescription = `<div>${postDes}</div>`;

  const handleDeletePost = async () => {
    if (window.confirm("Are you sure to delete?")) {
      const res = await fetch(`http://localhost:3000/api/deletePost/${_id}`);
      const data = await res.json();
      if (data.deletedCount >= 1) {
        toast.success("Successfully deleted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.push("/");
      }
    } else return;
  };
  return (
    <div>
      <div>
        <div className="flex justify-center mt-8 ">
          <img
            src={coverPic}
            className="h-[400px] w-[1000px] object-cover rounded-lg"
            alt=""
          />
        </div>
        <div className=" w-full px-5 pb-24 pt-8 mx-auto lg:px-32">
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="order-last w-full max-w-screen-sm m-auto mt-12 lg:w-1/4 lg:order-first">
              <div className="p-4 transition duration-500 ease-in-out transform bg-white border border-indigo-500 rounded-lg">
                <div className="flex py-2 mb-4">
                  <img
                    src={profilePic}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">
                      {authorName}
                    </p>
                    <p className="text-sm text-gray-500">Author</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-2 p-4 bg-white border border-indigo-500 mt-4 rounded">
                <Link
                  href={`/editBlog/${_id}`}
                  className="flex justify-center border border-indigo-500 hover:bg-indigo-500 hover:text-white rounded-lg"
                >
                  <button>Edit This post</button>
                </Link>
                <button
                  onClick={handleDeletePost}
                  className="border border-indigo-500 hover:bg-indigo-500 hover:text-white rounded-lg"
                >
                  Delete this post
                </button>
              </div>
            </div>
            <div className="w-full px-4 mt-12 prose lg:px-0 lg:w-3/4">
              <div className="mb-5 border-b border-gray-200">
                <div className="flex flex-wrap items-baseline -mt-2">
                  <h5>{createdAt}</h5>
                  {/* <p className="mt-1 ml-2">Transitions</p> */}
                </div>
              </div>
              <h1 className="text-3xl font-bold">{postTitle}</h1>
              <div
                className="quill-content"
                dangerouslySetInnerHTML={{ __html: postDescription }}
              ></div>
            </div>
          </div>
        </div>
        <div>
          {comments.length > 0 && <Reviews comments={comments}></Reviews>}
        </div>
        <div>
          <LeaveComment id={_id}></LeaveComment>
        </div>
      </div>
    </div>
  );
};

export default Postdetails;
