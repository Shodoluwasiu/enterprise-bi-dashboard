import { FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar bg-white shadow-sm px-4">
      <h5 className="m-0">Enterprise Dashboard</h5>

      <div className="d-flex align-items-center gap-3">
        <FaBell size={20} />
        <FaUserCircle size={28} />
      </div>
    </nav>
  );
}

export default Navbar;