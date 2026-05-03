import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

function Dashboard() {
  const [page, setPage] = useState("overview");

  const [theme, setTheme] = useState("light");

  const [profile, setProfile] = useState({
    name: "Abdi Rizack",
    email: "abdi@gmail.com",
  });

  // 👥 USERS (CRUD STATE)
  const [users, setUsers] = useState([
    { id: 1, name: "Abdi Rizack" },
    { id: 2, name: "John Doe" },
    { id: 3, name: "Sarah Ali" },
  ]);

  // ➕ Add user
  const addUser = () => {
    const name = prompt("Enter user name:");
    if (!name) return;

    const newUser = {
      id: Date.now(),
      name,
    };

    setUsers([...users, newUser]);
  };

  // ✏️ Edit user
  const editUser = (id) => {
    const newName = prompt("Enter new name:");
    if (!newName) return;

    setUsers(
      users.map((u) =>
        u.id === id ? { ...u, name: newName } : u
      )
    );
  };

  // ❌ Delete user
  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const logout = () => {
    alert("Logged out successfully");
    window.location.href = "/";
  };

  const barData = [
    { name: "Jan", users: 30 },
    { name: "Feb", users: 50 },
    { name: "Mar", users: 80 },
    { name: "Apr", users: 60 },
  ];

  const pieData = [
    { name: "Mobile", value: 40 },
    { name: "Desktop", value: 35 },
    { name: "Tablet", value: 25 },
  ];

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b"];

  return (
    <div
      className={`flex min-h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >

      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-900 text-white p-5 hidden md:block">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

        <nav className="space-y-4">
          <p onClick={() => setPage("overview")} className="cursor-pointer hover:text-blue-400">
            📊 Overview
          </p>

          <p onClick={() => setPage("users")} className="cursor-pointer hover:text-blue-400">
            👥 Users
          </p>

          <p onClick={() => setPage("analytics")} className="cursor-pointer hover:text-blue-400">
            📈 Analytics
          </p>

          <p onClick={() => setPage("settings")} className="cursor-pointer hover:text-blue-400">
            ⚙️ Settings
          </p>
        </nav>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOP BAR */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h2 className="font-semibold capitalize">{page}</h2>
        </header>

        <main className="p-6">

          {/* OVERVIEW */}
          {page === "overview" && (
            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-white p-5 rounded-xl shadow">
                <h3 className="text-gray-500">Users</h3>
                <p className="text-2xl font-bold">{users.length}</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow">
                <h3 className="text-gray-500">Revenue</h3>
                <p className="text-2xl font-bold">$3,200</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow">
                <h3 className="text-gray-500">Progress</h3>
                <p className="text-2xl font-bold">70%</p>
              </div>

            </div>
          )}

          {/* USERS CRUD */}
          {page === "users" && (
            <div className="bg-white p-6 rounded-xl shadow">

              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Users</h2>

                <button
                  onClick={addUser}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  + Add User
                </button>
              </div>

              <ul className="space-y-3">
                {users.map((user) => (
                  <li
                    key={user.id}
                    className="flex justify-between items-center p-3 bg-gray-100 rounded"
                  >
                    <span>👤 {user.name}</span>

                    <div className="space-x-2">
                      <button
                        onClick={() => editUser(user.id)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteUser(user.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ANALYTICS */}
          {page === "analytics" && (
            <div className="bg-white p-6 rounded-xl shadow">

              <h2 className="text-lg font-semibold mb-6">Analytics</h2>

              <div className="grid md:grid-cols-2 gap-8">

                <BarChart width={300} height={250} data={barData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="users" fill="#3b82f6" />
                </BarChart>

                <PieChart width={300} height={250}>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index]} />
                    ))}
                  </Pie>

                  <Legend />
                  <Tooltip />
                </PieChart>

              </div>
            </div>
          )}

          {/* SETTINGS */}
          {page === "settings" && (
            <div className="bg-white p-6 rounded-xl shadow">

              <h2 className="text-xl font-bold mb-6">Settings</h2>

              {/* THEME */}
              <button
                onClick={toggleTheme}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
              >
                Toggle Theme
              </button>

              {/* PROFILE */}
              <div className="space-y-3">
                <input
                  className="w-full p-2 border rounded"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                />

                <input
                  className="w-full p-2 border rounded"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                />
              </div>

              {/* LOGOUT */}
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded mt-4"
              >
                Logout
              </button>

            </div>
          )}

        </main>
      </div>
    </div>
  );
}

export default Dashboard;