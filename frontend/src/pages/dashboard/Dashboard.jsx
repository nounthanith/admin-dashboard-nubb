import React, { useState } from "react";
import useFindAllUser from "../../hooks/auth/useFindallUser";
import { Link } from "react-router-dom";

function Dashboard() {
  const [search, setSearch] = useState("");
  const { allUser, users } = useFindAllUser(search);

  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 ">
        <div className="border-2 px-5 py-2 rounded-lg w-full">
            <div className="flex gap-3">
                <span className="text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </span>
                <p className="font-thin text-black dark:text-white">Total users</p>
            </div>
            <h2 className="text-4xl font-bold">
                {allUser}
            </h2>
        </div>

        <div className="border-2 px-5 py-2 rounded-lg w-full">
            <div className="flex gap-3">
                <span className="text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </span>
                <p className="font-thin text-black dark:text-white">Total users</p>
            </div>
            <h2 className="text-4xl font-bold">
                {allUser}
            </h2>
        </div>

        <div className="border-2 px-5 py-2 rounded-lg w-full">
            <div className="flex gap-3">
                <span className="text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </span>
                <p className="font-thin text-black dark:text-white">Total users</p>
            </div>
            <h2 className="text-4xl font-bold">
                {allUser}
            </h2>
        </div>

        <div className="border-2 px-5 py-2 rounded-lg w-full">
            <div className="flex gap-3">
                <span className="text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </span>
                <p className="font-thin text-black dark:text-white">Total users</p>
            </div>
            <h2 className="text-4xl font-bold">
                {allUser}
            </h2>
        </div>
      </div>

      <form onSubmit={handleSearch} className="mt-5 flex justify-between mb-2 w-full md:w-[70%] m-auto">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border w-auto p-2 rounded "
        />
        
        <Link to='/signup' className="bg-green-500 text-white p-2 rounded ">
            Add+
        </Link>
        
      </form>

      <div className="w-full md:w-[70%] m-auto">
        {users && users.length > 0 ? (
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-stone-100 dark:bg-[#415a77] text-black dark:text-white">
            <table className="table">
              <thead>
                <tr className="text-black dark:text-white underline">
                    <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td className="font-semibold">{index + 1}</td>
                    <td className="font-bold">{user.name}</td>
                    <td className="text-blue-600 dark:text-red-300 underline cursor-pointer">{user.email}</td>
                    <td className="capitalize text-blue-600 dark:text-red-300 cursor-pointer hover:underline">{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-3xl text-center text-red-500 font-semibold mt-15">User not found!!!</p>
        )}
      </div>
    </>
  );
}

export default Dashboard;
