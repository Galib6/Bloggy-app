import HomePage from "@/components/HomePage";
import { API_URL } from "@/utils/urls";
import React, { useEffect, useState } from "react";

const index = ({ posts }) => {
  return (
    <>
      <HomePage posts={posts}></HomePage>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/allPost");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}

export default index;
