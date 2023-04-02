import useRole from "@/CutomHook/useRole";
import { AuthContext } from "@/context/AuthProvider";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { toast } from "react-toastify";

const AddABlog = () => {
  const [errorOfTitle, setErrorOfTitle] = useState();
  const [errorOfDetails, setErrorsOfDetails] = useState();
  const { user } = useContext(AuthContext);
  const [role, isLoading] = useRole(user?.email);
  const router = useRouter();

  //   useEffect(() => {
  //     if (!isLoading) {
  //       if (role !== "admin") {
  //         router.push("/");
  //         toast.error("Unauthorized Access!", {
  //           position: "top-right",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "light",
  //         });
  //       }
  //     }
  //   }, [role]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const titleRegex = /^[a-zA-Z ]*$/;
    if (!title.trim()) {
      setErrorOfTitle("Title is required");
      return;
    } else if (!titleRegex.test(title)) {
      setErrorOfTitle("Title can only contain letters and spaces");
      return;
    } else if (title.length < 50) {
      setErrorOfTitle("Title must be at least 50 characters long");
      return;
    } else if (title.length > 200) {
      setErrorOfTitle("Title cannot be longer than 200 characters");
      return;
    }
    const details = form.details.value;

    if (!details.trim()) {
      setErrorsOfDetails("Details are required");
      return;
    } else {
      const detailsWords = details.trim().split(/\s+/).length;
      if (detailsWords < 300) {
        setErrorsOfDetails("Details must be at least 300 words long");
        return;
      } else if (detailsWords > 500) {
        setErrorsOfDetails("Details cannot be longer than 500 words");
        return;
      }
    }

    console.log("ok de");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        class="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 mx-auto"
      >
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
          Add a blog
        </h2>
        <p class="leading-relaxed mb-5 text-gray-600">
          Write your blog post here.
        </p>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="name"
            onChange={() => setErrorOfTitle("")}
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <p className="text-red-500">{errorOfTitle}</p>
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600">
            Details
          </label>
          <textarea
            id="message"
            name="details"
            onChange={() => setErrorsOfDetails("")}
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-44 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            spellcheck="false"
            data-ms-editor="true"
            data-gramm="false"
            wt-ignore-input="true"
          ></textarea>
          <p className="text-red-500">{errorOfDetails}</p>
        </div>
        <button
          type="submit"
          class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddABlog;
