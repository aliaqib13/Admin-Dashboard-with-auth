import Admin from "layouts/Admin";
import React, { useState } from "react";

export default function AddCategories() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded lg:px-20 px-4 pb-10">
            <h1 className=" text-2xl font-semibold my-8">Add Catagories </h1>
            <div>
              <form className="w-full ">
                <div className=" flex justify-center flex-col gap-4">
                  <div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
                    <input
                      type="text"
                      placeholder="Title"
                      className="  appearance-none   bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                    <input
                      type="text"
                      placeholder="Short Title"
                      className="  appearance-none   bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                  </div>
                  <div className=" grid grid-cols-1 gap-4">
                    <input
                      type="text"
                      placeholder="Descriptions"
                      className="  appearance-none   bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                  </div>
                  <div className=" grid lg:grid-cols-2 grid-cols-1   gap-4">
                    <label
                      htmlFor="file-upload"
                      className="px-4 py-3 bg-blueGray-500 hover:bg-blueGray-700 text-white font-semibold rounded-lg cursor-pointer"
                    >
                      Catagory Image:
                      {selectedFile && (
                        <span className=" font-light">
                          {" "}
                          {selectedFile.name}
                        </span>
                      )}
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />

                    <label
                      htmlFor="file-upload"
                      className="px-4 py-3 bg-blueGray-500 hover:bg-blueGray-700 text-white font-semibold rounded-lg cursor-pointer"
                    >
                      Banner Image:
                      {selectedFile && (
                        <span className=" font-light">
                          {" "}
                          {selectedFile.name}
                        </span>
                      )}
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </div>

                  <div className=" grid grid-cols-1 gap-4">
                    <input
                      type="text"
                      placeholder="Slug"
                      className="  appearance-none   bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                  </div>

                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-sm">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

AddCategories.layout = Admin;
