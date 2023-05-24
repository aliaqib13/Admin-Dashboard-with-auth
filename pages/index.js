/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

// import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexNavbar from "../components/Navbars/IndexNavbar";
import Footer from "../components/Footers/Footer";
import CustomLink from "../components/Link/Link";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-[850px]">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Welcome to Sire Printing Dashboard
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Based in Brooklyn NY,{" "}
                <a
                  href="https://sireprinting.com/"
                  className="text-blueGray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sireprinting.com
                </a>{" "}
                Sireprinting.com is a family-owned printing and packaging
                company having a strict emphasis on providing environmentally
                friendly printing and packaging solutions to its esteemed
                clients. In 8 years, we have earned an excellent reputation in
                the packaging industry.
              </p>
              <div className="mt-12">
                <CustomLink
                  href="/admin/dashboard"
                  className=" bg-black text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Dahabord
                </CustomLink>
                <CustomLink
                  href="/auth/register"
                  className="github-star bg-black ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  Register
                </CustomLink>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/pattern_nextjs.png"
          alt="..."
        />
      </section>

      <Footer />
    </>
  );
}
