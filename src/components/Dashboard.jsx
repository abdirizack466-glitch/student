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
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  const [page, setPage] = useState("overview");
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  const [profile, setProfile] = useState({
    name: "Abdi Rizack",
    email: "abdi@gmail.com",
  });

  const [users, setUsers] = useState([
    { id: 1, name: "Abdi Rizack" },
    { id: 2, name: "John Doe" },
    { id: 3, name: "Sarah Ali" },
  ]);

  const addUser = () => {
    const name = prompt("Enter user name:");
    if (!name) return;
    setUsers([...users, { id: Date.now(), name }]);
  };

  const editUser = (id) => {
    const newName = prompt("Enter new name:");
    if (!newName) return;
    setUsers(users.map((u) => (u.id === id ? { ...u, name: newName } : u)));
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

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
      className={`flex flex-col md:flex-row min-h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >

      {/* MOBILE TOP BAR */}
      <div className="md:hidden flex justify-between items-center p-4 bg-gray-900 text-white">
        <h1 className="font-bold">Dashboard</h1>

        <button onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* SIDEBAR */}
      <aside
        className={`bg-gray-900 text-white p-5 space-y-4
        ${menuOpen ? "block" : "hidden"} md:block md:w-64`}
      >
        <h1 className="text-2xl font-bold mb-6 hidden md:block">
          Dashboard
        </h1>

        {["overview", "users", "analytics", "settings"].map((item) => (
          <p
            key={item}
            onClick={() => {
              setPage(item);
              setMenuOpen(false);
            }}
            className="cursor-pointer hover:text-blue-400 capitalize"
          >
            {item}
          </p>
        ))}
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOP BAR (desktop) */}
        <header className="hidden md:flex bg-white shadow p-4 justify-between">
          <h2 className="font-semibold capitalize">{page}</h2>
        </header>

        <main className="p-4 md:p-6">

          {/* OVERVIEW */}
          {page === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

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

          {/* USERS */}
          {page === "users" && (
            <div className="bg-white p-4 md:p-6 rounded-xl shadow">

              <div className="flex flex-col md:flex-row md:justify-between gap-3 mb-4">
                <h2 className="text-xl font-bold">Users</h2>

                <button
                  onClick={addUser}
                  className="bg-blue-500 text-white px-3 py-2 rounded"
                >
                  + Add User
                </button>
              </div>

              <ul className="space-y-3">
                {users.map((user) => (
                  <li
                    key={user.id}
                    className="flex flex-col md:flex-row md:justify-between gap-2 p-3 bg-gray-100 rounded"
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
            <div className="bg-white p-4 md:p-6 rounded-xl shadow">

              <h2 className="text-lg font-semibold mb-6">Analytics</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="w-full h-64">
                  <ResponsiveContainer>
                    <BarChart data={barData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="users" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="w-full h-64">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie data={pieData} dataKey="value" outerRadius={80} label>
                        {pieData.map((_, i) => (
                          <Cell key={i} fill={COLORS[i]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

              </div>
            </div>
          )}

          {/* SETTINGS */}
          {page === "settings" && (
            <div className="bg-white p-4 md:p-6 rounded-xl shadow">

              <h2 className="text-xl font-bold mb-6">Settings</h2>

              <button
                onClick={toggleTheme}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
              >
                Toggle Theme
              </button>

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