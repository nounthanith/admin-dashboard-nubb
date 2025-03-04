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
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                  </svg>
                  <div className="hidden lg:block">Dashboard</div>
                </Link>
              </li>
              <li>
                <a to="/" className="flex items-center justify-center lg:justify-start gap-3 px-2 py-2 md:py-4 bg-gray-100 dark:bg-[#778da9] hover:bg-gray-200 transition-all w-full active:text-red-500  rounded-lg shadow-inner font-bold mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                </svg>
                  <div className="hidden lg:block">Product</div>
                </a>
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
