import React, { useState } from "react";
import useFindAllUser from "../../hooks/auth/useFindallUser";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Cell,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
} from "recharts";
import useCategory from "../../hooks/category/useCategory";

function Dashboard() {
  const [search, setSearch] = useState("");
  const { allUser, users } = useFindAllUser(search);
  const { totalItem } = useCategory();

  const handleSearch = (e) => {
    e.preventDefault();
  };

  //design
  const dailyOrdersData = [
    { date: "07/01", orders: 0 },
    { date: "07/02", orders: 52 },
    { date: "07/03", orders: 4 },
    { date: "07/04", orders: 20 },
    { date: "07/05", orders: 55 },
    { date: "07/06", orders: 58 },
    { date: "07/07", orders: 82 },
  ];

  const orderStatusData = [
    { name: "Pending", value: 40 },
    { name: "Processing", value: 45 },
    { name: "Shipped", value: 60 },
    { name: "Delivered", value: 120 },
  ];
  const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FED766", "#2AB7CA"];
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 z-0 w-full md:w-[70%] m-auto">
        <div className="border-2 px-5 py-5 rounded-lg w-full">
          <div className="flex gap-3">
            <span className="text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </span>
            <p className="font-thin text-black dark:text-white">Total users</p>
          </div>
          <h2 className="text-4xl font-bold">{allUser}</h2>
        </div>

        <div className="border-2 px-5 py-5 rounded-lg w-full">
          <div className="flex gap-3">
            <span className="text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                />
              </svg>
            </span>
            <p className="font-thin text-black dark:text-white">
              Total Category
            </p>
          </div>
          <h2 className="text-4xl font-bold">{totalItem}</h2>
        </div>

        <div className="border-2 px-5 py-5 rounded-lg w-full">
          <div className="flex gap-3">
            <span className="text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </span>
            <p className="font-thin text-black dark:text-white">Total users</p>
          </div>
          <h2 className="text-4xl font-bold">{0}</h2>
        </div>

        <div className="border-2 px-5 py-5 rounded-lg w-full">
          <div className="flex gap-3">
            <span className="text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </span>
            <p className="font-thin text-black dark:text-white">Total users</p>
          </div>
          <h2 className="text-4xl font-bold">{0}</h2>
        </div>
      </div>

      <form
        onSubmit={handleSearch}
        className="mt-5 flex justify-between mb-2 w-full md:w-[70%] m-auto"
      >
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border w-auto p-2 rounded "
        />

        <Link to="/signup" className="bg-green-500 text-white p-2 rounded ">
          Add+
        </Link>
      </form>

      <div className="w-full md:w-[70%] m-auto z-0">
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
                    <td className="text-blue-600 dark:text-red-300 underline cursor-pointer">
                      {user.email}
                    </td>
                    <td className="capitalize text-red-600 dark:text-red-300 cursor-pointer hover:underline">
                      {user.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-3xl text-center text-red-500 font-semibold mt-15">
            User not found!!!
          </p>
        )}
      </div>

      <div className="z-0 block lg:flex gap-5 w-full lg:w-[70%] m-auto">
        <motion.div
          className="dark:bg-gray-800 bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 w-full md:w-[70%] m-auto mt-5 z-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold text-black dark:text-gray-100 mb-4">
            Daily Orders
          </h2>

          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={dailyOrdersData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.8)",
                    borderColor: "#4B5563",
                  }}
                  itemStyle={{ color: "#E5E7EB" }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          className="dark:bg-gray-800 bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 w-full md:w-[70%] m-auto mt-5 z-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold dark:text-gray-100 mb-4">
            Order Status Distribution
          </h2>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={orderStatusData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {orderStatusData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.8)",
                    borderColor: "#4B5563",
                  }}
                  itemStyle={{ color: "#E5E7EB" }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Dashboard;
