import DashboardHeader from "../../components/dashboard/DashboardHeader/DashboardHeader";
import KPIGrid from "../../components/dashboard/KPIGrid/KPIGrid";
import RevenueChart from "../../components/dashboard/RevenueChart/RevenueChart";
import SalesChart from "../../components/dashboard/SalesChart/SalesChart";
import RecentTransactions from "../../components/dashboard/RecentTransactions/RecentTransactions";
import ProductTable from "../../components/tables/ProductTable/ProductTable";
import TopProducts from "../../components/dashboard/TopProducts/TopProducts";
import InventoryStatus from "../../components/dashboard/InventoryStatus/InventoryStatus"


function Dashboard() {
  return (
    <>
      <DashboardHeader />

      <KPIGrid />

      {/* Charts */}
      <div className="row mt-4">
        <div className="col-lg-8">
          <RevenueChart />
        </div>

        <div className="col-lg-4">
          <SalesChart />
        </div>
      </div>

      {/* Business Widgets */}
      <div className="row mt-4">
        <div className="col-lg-6">
          <TopProducts />
        </div>

        <div className="col-lg-6">
          <InventoryStatus />
        </div>
      </div>

      {/* Tables */}
      <RecentTransactions />

      <ProductTable />
    </>
  );
}

export default Dashboard;