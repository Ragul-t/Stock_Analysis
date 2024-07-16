import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

import RegistrationForm from "./components/RegistrationForm.js";
import Riskform from "./components/riskform";
import Navbar from "./layout/navbar.js";
import RiskAnalysisForm from "./components/RiskAnalysisForm";
import Dashboard from "./components/Dashboard.jsx";
import Home from "./layout/Home.jsx";
import Choice from "./components/Choice.jsx";
import Dashboard2 from "./components/Dashboard2.jsx";
import Dummy from "./components/Dummy.jsx";
import Stocks from "./components/Stocks.jsx";
import PortfolioList from "./layout/PortfolioList.jsx";
import PortfolioForm from "./components/PortfolioForm.jsx";
import PortfolioDetails from "./layout/PortfolioDetails.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/dum" element={<Dummy />} />
          <Route path="/choice" element={<Choice />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/riskform" element={<Riskform />} />
          <Route path="/riskanalysis" element={<RiskAnalysisForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard2" element={<Dashboard2 />} />
          <Route path="/portfoliolist" element={<PortfolioList />} />
          <Route path="/portfolios/:id" element={<PortfolioDetails />} />
          <Route path="/portfolios/new" element={<PortfolioForm />} />
          <Route path="/portfolios/:id/edit" element={<PortfolioForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
