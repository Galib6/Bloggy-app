import { generateToast } from "@/utils/helper";
import React, { useState } from "react";
import { toast } from "react-toastify";

const LeaveComment = ({ id }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    review: "",
    id,
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setComment({ ...comment, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("r");

    fetch("http://localhost:3000/api/leavecomment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "User created") {
          e.target.reset();
          toast.success("Success, Comment posted", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };

  return (
    <section className="text-gray-600 body-font relative  mb-5">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-20 ml-2">
        Leave a comment
      </h1>
      <hr className="mt-[-50px] mb-5" />
      <div className="container px-5 py-8 mx-auto">
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form className="flex flex-wrap -m-2" onSubmit={handleSubmit}>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label for="review" className="leading-7 text-sm text-gray-600">
                  Review
                </label>
                <textarea
                  onChange={handleChange}
                  name="review"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  spellcheck="false"
                  data-ms-editor="true"
                  data-gramm="false"
                  wt-ignore-input="true"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeaveComment;
