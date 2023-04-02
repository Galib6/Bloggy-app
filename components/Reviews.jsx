import React, { useState } from "react";
import SingleComment from "./SingleComment";

const Reviews = ({ comments }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-6 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-20">
          Reviews
        </h1>
        <hr className="mt-[-50px] mb-5" />
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          {comments?.map((comment, i) => (
            <SingleComment key={i} comment={comment}></SingleComment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
