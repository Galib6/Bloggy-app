import { fetchDataFromApi } from "@/utils/api";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import PostCard from "./PostCard";
import { API_URL } from "@/utils/urls";
import SearchComponent from "./SearchComponent";

const HomePage = ({ posts }) => {
  return (
    <main>
      <Wrapper>
        <h1 className="pt-10 text-[25px] font-semibold text-center">
          Seach what you want know?..
        </h1>
        <SearchComponent></SearchComponent>
        <h1 className="p-5 text-[20px]">Blog Posts</h1>
        <hr className="mx-5" />
        <div className="grid grid-cols-1 gap-12 mb-20 mt-5">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
};

export default HomePage;
