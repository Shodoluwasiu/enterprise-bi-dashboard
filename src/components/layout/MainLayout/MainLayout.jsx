import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

function MainLayout({ children }) {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1">
        <Navbar />

        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;