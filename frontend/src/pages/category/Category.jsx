// CategoryList.js
import React, { useState } from "react";
import useCategory from "../../hooks/category/useCategory";
import { Cell, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, } from "recharts";
import { motion } from "framer-motion";


const Category = () => {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)
  const [search, setSearch] = useState('')
  const {categories, totalPage, totalItem} = useCategory(page, limit, search)


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
    <div className="w-full md:w-[70%] m-auto">
      <h1 className="text-2xl mb-2 font-semibold">Category</h1>

      <div className="flex justify-between items-center mb-3 gap-3 ">
        <select className="select select-bordered w-20" onChange={(e) => setLimit(e.target.value)}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
        </select>
            <input className="input input-bordered" type="text" placeholder="Search by name" onChange={(e) => setSearch(e.target.value)}/>
      </div>

      <div className="">
        <div className="overflow-x-autobg-stone-100 dark:bg-[#415a77] bg-white text-black dark:text-gray-300 shadow-2xl ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Descption</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {categories &&
                categories.map((category, index) => (
                  <tr key={category._id}>
                    <th>{index + 1}.</th>
                    <td className="font-semibold">{category.name}</td>
                    <td>{category.note}</td>
                    <td className="flex gap-2">
                      <a href="" className="text-red-600 dark:text-red-500 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4 md:size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </a>
                      <a href="" className="text-purple-500 dark:text-green-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4 md:size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-between dark:bg-[#415a77] bg-white items-center p-3 shadow mt-3">
        <p className="font-bold">Page{page}/{totalPage}</p>
        <div className="join">
          <button onClick={() => setPage(page -1)} disabled={page == 1} className="join-item shadow btn">«</button>
          <button className="join-item shadow btn">{page}</button>
          <button onClick={() => setPage(page +1)} disabled={page == totalPage} className="join-item shadow btn">»</button>
        </div>
      </div>

      <div className="">
        <div className="z-0 block lg:flex gap-5">
          <motion.div
            className="dark:bg-gray-800 bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mt-5 z-0"
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
            className="dark:bg-gray-800 bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mt-5 z-0"
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
      </div>
    </div>
  );
};

export default Category;
