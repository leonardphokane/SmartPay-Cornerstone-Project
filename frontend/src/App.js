// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NeonDashboard from "./components/NeonDashboard";
import Accounts from "./pages/Accounts";
import Transactions from "./pages/Transactions";
import Payments from "./pages/Payments";
import Diagnostics from "./pages/Diagnostics";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Root path shows the dashboard */}
        <Route path="/" element={<NeonDashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/diagnostics" element={<Diagnostics />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
