import { NavLink } from "react-router-dom";
import {
  FaChartPie,
  FaMoneyBillWave,
  FaUsers,
  FaBoxes,
  FaChartLine,
  FaFileAlt,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  const menu = [
    { name: "Dashboard", path: "/", icon: <FaChartPie /> },
    { name: "Sales", path: "/sales", icon: <FaMoneyBillWave /> },
    { name: "Customers", path: "/customers", icon: <FaUsers /> },
    { name: "Inventory", path: "/inventory", icon: <FaBoxes /> },
    { name: "Analytics", path: "/analytics", icon: <FaChartLine /> },
    { name: "Reports", path: "/reports", icon: <FaFileAlt /> },
    { name: "Settings", path: "/settings", icon: <FaCog /> },
  ];

  return (
    <aside className="bg-dark text-white vh-100 p-3" style={{ width: "260px" }}>
      <h4 className="mb-4">Enterprise BI</h4>

      {menu.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `d-flex align-items-center gap-2 p-2 rounded mb-2 text-decoration-none ${
              isActive ? "bg-primary text-white" : "text-white"
            }`
          }
        >
          {item.icon}
          {item.name}
        </NavLink>
      ))}
    </aside>
  );
}

export default Sidebar;