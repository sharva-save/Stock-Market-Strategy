import Layout from "./components/app/layout";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Strategies from "./components/Strategies";
import History from "./components/History";
import Settings from "./components/Settings";
import Intraday from "./components/intraday/Intraday";
import AbInfo from "./components/intraday/AbInfo"
import AbBuy from "./components/intraday/AbBuy"

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/strategies" element={<Strategies />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />


          <Route path="/intraday" element={<Intraday />} />
          <Route path="/abInfo" element={<AbInfo />} />
          <Route path="/ab-buy" element={<AbBuy />} />
          
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}