import React, { useState, useEffect, useContext } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import MenuMobile from "./MenuMobile";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { fetchDataFromApi } from "@/utils/api";
import { AuthContext } from "@/context/AuthProvider";
import useRole from "@/CutomHook/useRole";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
  const [role, isLoading] = useRole(user?.email);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 shadow-md ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <h1 className="font-bold text-[30px] flex justify-center text-neutral-600">
            Bloggy
          </h1>

          {/* <img src="/logo.png" className="" /> */}
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-medium text-black">
          <Link href="/">
            <li>Home</li>
          </Link>
          {!isLoading && role === "author" && (
            <Link href="/addablog">
              <li>Add a blog</li>
            </Link>
          )}
          {!isLoading && role === "admin" && (
            <Link href="/addablog">
              <li>Add a blog</li>
            </Link>
          )}
          <Link href="/about">
            <li>About</li>
          </Link>
        </ul>

        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            categories={categories}
          />
        )}

        <div className="flex items-center gap-2 text-black">
          {user && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="">
                <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>{user?.displayName}</a>
                </li>
                <li>
                  <button onClick={handleLogOut}>Log out</button>
                </li>
              </ul>
            </div>
          )}

          {user ? (
            <></>
          ) : (
            <Link
              href="/login"
              className=" px-3 py-2 bg-[#570DF8] text-white rounded-full"
            >
              <button>Sign in</button>
            </Link>
          )}

          {/* Icon end */}

          {/* Mobile icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* Mobile icon end */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
