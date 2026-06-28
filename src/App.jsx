import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout/MainLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import Sales from "./pages/Sales/Sales";
import Customers from "./pages/Customers/Customers";
import Inventory from "./pages/Inventory/Inventory";
import Analytics from "./pages/Analytics/Analytics";
import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";

function App() {
  https://dummyjson.com
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
    
    
  );
}
//https://dummyjson.com

export default App;