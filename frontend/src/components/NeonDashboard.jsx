// NeonDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Flashcard from "./Flashcard";
import Transactions from "../pages/Transactions";

export default function NeonDashboard() {
  const cards = [
    { title: "Accounts", desc: "Manage customer accounts securely.", path: "/accounts" },
    { title: "Transactions", desc: "View and audit all payment flows.", path: "/transactions" },
    { title: "Payments", desc: "Transfer funds between accounts.", path: "/payments" },
    { title: "Diagnostics", desc: "Monitor health and actuator info.", path: "/diagnostics" },
  ];

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Sidebar />
      <main className="ml-64 p-10">
        {/* Updated Title */}
        <h2 className="text-4xl font-extrabold text-blue-400 neon-title mb-10">
          SMARTPAY AFRICA DASHBOARD
        </h2>

        {/* Neon Cards with routing */}
        <div className="grid grid-cols-2 gap-8">
          {cards.map((card) => (
            <Link
              key={card.title}
              to={card.path}
              className="p-6 border border-cyan-400 rounded-lg shadow-neon hover:shadow-blue-500 transition block"
            >
              <h3 className="text-xl font-bold text-blue-300 mb-2">{card.title}</h3>
              <p className="text-gray-300">{card.desc}</p>
            </Link>
          ))}
        </div>

        {/* Flashcards */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-blue-400 neon-title mb-6">Flashcards</h2>
          <div className="flex space-x-6">
            <Flashcard
              question="What is a Transaction?"
              answer="A record of funds transferred between accounts."
            />
            <Flashcard
              question="What is Diagnostics?"
              answer="Monitoring API health and actuator endpoints."
            />
          </div>
        </section>

        {/* Live Transactions */}
        <section className="mt-12">
          <Transactions />
        </section>
      </main>
    </div>
  );
}
