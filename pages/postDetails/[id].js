import Reviews from "@/components/Reviews";
import Wrapper from "@/components/Wrapper";
import LeaveComment from "@/components/leaveComment";
import React from "react";

const postDetails = ({ data }) => {
  const { postTitle, createdAt, postDes, authorName, _id } = data;
  return (
    <Wrapper>
      <div className=" w-full px-5 pb-24 pt-8 mx-auto lg:px-32">
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="order-last w-full max-w-screen-sm m-auto mt-12 lg:w-1/4 lg:order-first">
            <div className="p-4 transition duration-500 ease-in-out transform bg-white border rounded-lg">
              <div className="flex py-2 mb-4">
                <img
                  src="/assets/images/avatar.png"
                  className="w-16 h-16 rounded-full"
                />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    {authorName}
                  </p>
                  <p className="text-sm text-gray-500">Author</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 mt-12 prose lg:px-0 lg:w-3/4">
            <div className="mb-5 border-b border-gray-200">
              <div className="flex flex-wrap items-baseline -mt-2">
                <h5>{createdAt}</h5>
                {/* <p className="mt-1 ml-2">Transitions</p> */}
              </div>
            </div>
            <h1 className="text-2xl">{postTitle}</h1>
            <p>{postDes}</p>
          </div>
        </div>
      </div>
      <div>
        <Reviews></Reviews>
      </div>
      <div>
        <LeaveComment id={_id}></LeaveComment>
      </div>
    </Wrapper>
  );
};

export default postDetails;

export async function getServerSideProps(context) {
  const { params } = context;

  const res = await fetch(`http://localhost:3000/api/postdetails/${params.id}`);
  const data = await res.json();

  return {
    props: { data },
  };
}
