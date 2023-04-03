import EditBlog from "@/components/EditBlog";
import { useRouter } from "next/router";
import React from "react";

const editBlog = ({ data }) => {
  return (
    <div>
      <EditBlog data={data}></EditBlog>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;

  const res = await fetch(
    `https://bloggy-app-weld.vercel.app/api/postdetails/${params.id}`
  );
  const data = await res.json();

  return {
    props: { data },
  };
}

export default editBlog;
