import HomePage from "@/components/HomePage";
import { API_URL } from "@/utils/urls";
import React, { useEffect, useState } from "react";

const index = ({ posts, comments }) => {
  return (
    <>
      <HomePage posts={posts}></HomePage>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch("https://bloggy-app-weld.vercel.app/api/allPost");
  const data = await res.json();

  const commentsOnthisPost = await fetch(
    `https://bloggy-app-weld.vercel.app/api/postcomments/${params.id}`
  );
  const comments = await commentsOnthisPost.json();
  return {
    props: {
      posts: data,
      comments,
    },
  };
}

export default index;
