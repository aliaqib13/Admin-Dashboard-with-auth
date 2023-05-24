import { GetAllUser } from "Redux/actions/user";
import Admin from "layouts/Admin";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const AllCategories = () => {
  const dispatch = useDispatch();
  const [user, setuser] = useState([]);
  console.log(user);

  const getUser = useCallback(async () => {
    const res = await dispatch(GetAllUser());
    if (res) {
      setuser(res?.results);
    }
  }, [user]);

  useEffect(() => {
    let isSubscribe = true;
    if (isSubscribe) {
      getUser();
    }
    return () => (isSubscribe = false);
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded lg:px-10 px-4 pb-10">
            <h1 className=" text-2xl font-semibold my-8">All Catagories </h1>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Full Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Emergency Contact
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Sex
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Marital Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {user?.map((item, index) => (
                    <>
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item?.patientInformation?.firstName}{" "}
                          {item?.patientInformation?.lastName}
                        </th>
                        <td className="px-6 py-4">
                          {item?.patientInformation?.email}
                        </td>

                        <td className="px-6 py-4">
                          {item?.patientInformation?.phone}
                        </td>

                        <td className="px-6 py-4">
                          Mobile: {item?.patientInformation?.EmergencyMobile}
                          <br />
                          Phone: {item?.patientInformation?.EmergencyPhone}
                        </td>
                        <td className="px-6 py-4">
                          {item?.patientInformation?.sex}
                        </td>
                        <td className="px-6 py-4">
                          {item?.patientInformation?.maritalStatus}
                        </td>
                        <td className="px-6 py-4">
                          {item?.patientInformation?.address},
                          {item?.patientInformation?.city},
                          {item?.patientInformation?.state}
                          {item?.patientInformation?.zip}
                        </td>

                        <td className="px-6 py-4">
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCategories;

AllCategories.layout = Admin;
