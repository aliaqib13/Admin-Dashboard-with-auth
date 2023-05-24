import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";
import CustomLink from "../Link/Link";

import { RxAvatar } from "react-icons/rx";

import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "Redux/actions/auth";

export default function SideBar1() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [collapseShow, setCollapseShow] = useState("hidden");
  const [showSubMenu, setshowSubMenu] = useState("");

  const Menu = [
    {
      name: "CATEGORIES",
      path: "/admin/tables",
      icon: <BiCategoryAlt className=" text-xl" />,
      subMenu: [
        { name: " All Catagories", path: "/admin/categories" },
        { name: "Add Catagory", path: "/admin/categories/add-category" },
        { name: "Edit Catagory", path: "/admin/categories/edit-category" },
      ],
    },
  ];

  const handleLogout = () => {
    router.push("/auth/login");
    dispatch(logout());
  };
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <img
              className=" "
              src="https://sireprinting.com/img/brand/Sire-Printing.png"
              alt="logo"
            />
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <CustomLink href="/">
                    <a
                      href="#pablo"
                      className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    >
                      Notus NextJS
                    </a>
                  </CustomLink>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className=" px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {Menu?.map((item, i) => (
                <>
                  <li
                    key={i}
                    className="items-center"
                    onClick={
                      item?.subMenu
                        ? () => setshowSubMenu(item?.name)
                        : () => router.push(item?.path)
                    }
                  >
                    <div
                      className={`text-sm uppercase font-bold block cursor-pointer
                        ${
                          item?.name === showSubMenu
                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                            : "text-blueGray-700 hover:text-blueGray-500"
                        }`}
                    >
                      <div className="flex items-center justify-between  ">
                        <div className="flex items-center">
                          <div className="mr-4"> {item?.icon}</div>
                          <div> {item?.name}</div>
                        </div>
                        <div className=" m-4 text-xl ">
                          {item?.subMenu && <MdOutlineKeyboardArrowDown />}
                        </div>
                      </div>
                    </div>
                  </li>

                  {item?.subMenu && showSubMenu === item?.name && (
                    <>
                      {item?.subMenu?.map((sub, i) => (
                        <div
                          key={i}
                          className=" grid grid-cols-1 my-2  text-blueGray-700  font-medium "
                        >
                          <div className=" pl-10 ">
                            <CustomLink
                              href={sub.path}
                              className=" text-md py-2 "
                            >
                              {sub.name}
                            </CustomLink>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </>
              ))}
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <div
                  className={`text-sm uppercase font-bold block cursor-pointer   `}
                >
                  <div
                    onClick={handleLogout}
                    className="flex items-center justify-between  "
                  >
                    <div className="flex items-center">
                      <div className="mr-4">
                        <RxAvatar className=" text-xl" />
                      </div>
                      <div> LogOut</div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
