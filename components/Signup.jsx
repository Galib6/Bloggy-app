import { AuthContext } from "@/context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const {
    setUser,
    setLoading,
    createUser,
    updateUserProfile,
    signInwithGoolge,
  } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const [error, setError] = useState("");

  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    password: "",
    photoURL: "",
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUserInfo({ ...userInfo, [name]: value });
    console.log(userInfo);
  };

  const handleGoogleSignIn = () => {
    signInwithGoolge(provider)
      .then((res) => {
        setLoading(true);
        const user = res.user;
        setUser(user);
        toast.success("Seccessfully Sign up");

        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleUpdateUser = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, name, photoURL } = userInfo;
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateUser(name, photoURL);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <section className="">
      <div className=" items-center px-5 py-12 lg:px-20 shadow-md ">
        <div className="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0 border border-inherit">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
              Sign up.
            </h2>
          </div>
          <div className="mt-8">
            <div className="mt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Your Photo Url{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      value={userInfo.photoURL}
                      onChange={handleChange}
                      id="URL"
                      name="photoURL"
                      type="text"
                      autoComplete="email"
                      required=""
                      placeholder="Your Email"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Your Name{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      value={userInfo.name}
                      onChange={handleChange}
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="email"
                      required=""
                      placeholder="Your Email"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      value={userInfo.email}
                      onChange={handleChange}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required=""
                      placeholder="Your Email"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Password{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      value={userInfo.password}
                      onChange={handleChange}
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required=""
                      placeholder="Your Password"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-start">
                  <div className="flex items-center">
                    <label
                      htmlFor="remember-me"
                      className="block ml-2 text-sm text-neutral-600"
                    >
                      {" "}
                      Aready have an account?{" "}
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link
                      href="/login"
                      className="font-medium text-blue-600 hover:text-blue-500"
                    >
                      {" "}
                      Sign in{" "}
                    </Link>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 text-neutral-600 bg-white">
                    {" "}
                    Or continue with{" "}
                  </span>
                </div>
              </div>
              <div>
                <button
                  onClick={handleGoogleSignIn}
                  type="submit"
                  className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <div className="flex items-center justify-center">
                    <FcGoogle size={20} />
                    <span className="ml-4"> Log in with Google</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
