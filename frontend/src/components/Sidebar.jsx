import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 p-6 fixed h-full border-r border-blue-400 shadow-neon">
      <h1 className="text-2xl font-bold text-blue-400 mb-8 neon-title">
        SmartPay Africa
      </h1>
      <nav>
        <ul className="space-y-4">
          <li><Link className="hover:text-blue-300 transition" to="/">Dashboard</Link></li>
          <li><Link className="hover:text-blue-300 transition" to="/accounts">Accounts</Link></li>
          <li><Link className="hover:text-blue-300 transition" to="/transactions">Transactions</Link></li>
          <li><Link className="hover:text-blue-300 transition" to="/payments">Payments</Link></li>
          <li><Link className="hover:text-blue-300 transition" to="/diagnostics">Diagnostics</Link></li>
          <li><Link className="hover:text-blue-300 transition" to="/profile">Profile</Link></li>
          <li><Link className="hover:text-blue-300 transition" to="/logout">Logout</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
