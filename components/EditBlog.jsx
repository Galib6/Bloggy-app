import React from "react";
import useRole from "@/CutomHook/useRole";
import { AuthContext } from "@/context/AuthProvider";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Image } from "cloudinary-react";
import { validateImageFile } from "@/utils/helper";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
];

const EditBlog = ({ data }) => {
  const { postTitle, postDes, _id } = data;
  const [errorOfTitle, setErrorOfTitle] = useState();
  const [errorOfDetails, setErrorsOfDetails] = useState();
  const { user } = useContext(AuthContext);
  const [role, isLoading] = useRole(user?.email);
  const router = useRouter();
  const [value, setValue] = useState("");
  const [description, setDescription] = useState(postDes);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const titleRegex = /^[a-zA-Z., ]*$/;
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
    const details = description;

    if (!details.trim()) {
      setErrorsOfDetails("Details are required");
      return;
    } else {
      const detailsWords = details.trim().split(/\s+/).length;
      if (detailsWords < 300) {
        setErrorsOfDetails("Details must be at least 300 words long");
        return;
      } else if (detailsWords > 1200) {
        setErrorsOfDetails("Details cannot be longer than 1200 words");
        return;
      }
    }

    const postDetails = {
      postTitle: title,
      postDes: description,
    };

    fetch(`http://localhost:3000/api/updatePost/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postDetails),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          e.target.reset();
          toast.success("Successfully updates!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          router.push("/");
        }
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        class="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 mx-auto"
      >
        <h2 class="text-gray-900 text-2xl mb-1 font-medium title-font">
          Edit your blog here
        </h2>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-600">
            Title
          </label>
          <input
            defaultValue={postTitle}
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
          <div className="h-60">
            <QuillNoSSRWrapper
              value={description}
              modules={modules}
              formats={formats}
              theme="snow"
              className="h-44"
              onChange={(content) => {
                setDescription(content);
              }}
            />
          </div>
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

export default EditBlog;
