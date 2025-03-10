import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useUser from "../hooks/auth/useUser";
import useSignOut from "../hooks/auth/useSignout";

function AdminLayout() {
  const [isPosActive, setIsPosActive] = useState(false);
  const [isReportActive, setIsReportActive] = useState(false);
  const { user } = useUser();
  const { signout } = useSignOut();

  const handleSignOut = async () => {
    if (confirm("Are you sure?")) {
      await signout();
    }
  };

  return (
    <div className="static">
      <header className="flex justify-between items-center p-2 bg-[#d6ccc2] dark:bg-[#415a77] sticky top-0 border-b-1 z-10">
        <h1 className="font-bold">System</h1>
        <div className="space-x-2 ">
          <div className="dropdown dropdown-end">
            <button className="btn btn-sm uppercase mb-2">
              {user?.data?.role}
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-stone-300 "
            >
              <li>
                <a className=" bg-gray-500 text-white mb-1 hover:text-white font-medium capitalize">
                  {user?.data?.role}
                </a>
              </li>
              <li>
                <a
                  onClick={handleSignOut}
                  className="bg-error text-white hover:text-black font-medium"
                >
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main className="flex">
          <div className="w-[85px] h-auto h-screen lg:w-[260px] bg-[#e3d5ca] dark:bg-[#1b263b] p-2 lg:p-4 shadow border-r-1 fixed">
            <ul>
              <li>
                <Link to="/" className="flex items-center justify-center lg:justify-start gap-3 px-2 py-2 md:py-4 bg-gray-100 dark:bg-[#778da9] hover:bg-gray-200 transition-all w-full active:text-red-500  rounded-lg shadow-inner font-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                  </svg>
                  <div className="hidden lg:block">Dashboard</div>
                </Link>
              </li>
              <li>
                <Link to="/category" className="flex items-center justify-center lg:justify-start gap-3 px-2 py-2 md:py-4 bg-gray-100 dark:bg-[#778da9] hover:bg-gray-200 transition-all w-full active:text-red-500  rounded-lg shadow-inner font-bold mt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                  </svg>
                  <div className="hidden lg:block">Category</div>
                </Link>
              </li>
              <li>
                <a to="/" className="flex items-center justify-center lg:justify-start gap-3 px-2 py-2 md:py-4 bg-gray-100 dark:bg-[#778da9] hover:bg-gray-200 transition-all w-full active:text-red-500  rounded-lg shadow-inner font-bold mt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                  </svg>
                  <div className="hidden lg:block">Home</div>
                </a>
              </li>
            </ul>
          </div>
          <div className="grow p-5 h-auto w-[81%] ml-20 lg:ml-64">
            < Outlet/>
          </div>
      </main>
    </div>
  );
}

export default AdminLayout;
