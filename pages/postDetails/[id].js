import Postdetails from "@/components/Postdetails";
import Reviews from "@/components/Reviews";
import Wrapper from "@/components/Wrapper";
import LeaveComment from "@/components/leaveComment";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const postDetails = ({ data, comments }) => {
  return (
    <Wrapper>
      <Postdetails data={data} comments={comments}></Postdetails>
    </Wrapper>
  );
};

export default postDetails;

export async function getServerSideProps(context) {
  const { params } = context;

  const res = await fetch(
    `https://bloggy-app-weld.vercel.app/api/postdetails/${params.id}`
  );
  const data = await res.json();

  const res2 = await fetch(
    `https://bloggy-app-weld.vercel.app/api/postcomments/${params.id}`
  );
  const comments = await res2.json();

  return {
    props: { data, comments },
  };
}
