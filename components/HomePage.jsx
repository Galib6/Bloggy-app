import { fetchDataFromApi } from "@/utils/api";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import PostCard from "./PostCard";
import { API_URL } from "@/utils/urls";

const HomePage = ({ posts }) => {
  return (
    <main>
      <Wrapper>
        <div className="grid grid-cols-1 gap-12 my-20">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
};

export default HomePage;
