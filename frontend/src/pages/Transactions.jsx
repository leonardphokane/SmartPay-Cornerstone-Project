// Transactions.jsx
import React, { useEffect, useState } from "react";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/transactions")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setTransactions(data))
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Failed to load transactions. Please check backend.");
      });
  }, []);

  if (error) {
    return (
      <div className="p-6 text-red-400">
        <h2 className="text-3xl neon-title mb-4">Transactions</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl text-blue-400 neon-title mb-4">Transactions</h2>
      <table className="min-w-full border border-blue-400 text-white">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-4 py-2 border border-blue-400">ID</th>
            <th className="px-4 py-2 border border-blue-400">Sender</th>
            <th className="px-4 py-2 border border-blue-400">Receiver</th>
            <th className="px-4 py-2 border border-blue-400">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="hover:bg-gray-700 transition">
              <td className="px-4 py-2 border border-blue-400">{t.id}</td>
              <td className="px-4 py-2 border border-blue-400">{t.sender}</td>
              <td className="px-4 py-2 border border-blue-400">{t.receiver}</td>
              <td className="px-4 py-2 border border-blue-400">${t.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
