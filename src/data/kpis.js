import {
  FaMoneyBillWave,
  FaShoppingCart,
  FaUsers,
  FaWarehouse,
  FaChartLine,
  FaBuilding,
} from "react-icons/fa";

const kpis = [
  {
    title: "Revenue",
    value: "₦28.4M",
    percentage: "+12%",
    color: "success",
    icon: FaMoneyBillWave,
  },
  {
    title: "Orders",
    value: "5,680",
    percentage: "+8%",
    color: "primary",
    icon: FaShoppingCart,
    description: "Compared to last month",
  },
  {
    title: "Customers",
    value: "12,540",
    percentage: "+15%",
    color: "warning",
    icon: FaUsers,
    description: "New customers this month",
  },
  {
    title: "Inventory",
    value: "1,340",
    percentage: "-2%",
    color: "danger",
    icon: FaWarehouse,
     description: "Current stock level",
  },
  {
    title: "Profit",
    value: "₦7.2M",
    percentage: "+5%",
    color: "success",
    icon: FaChartLine,
      description: "Compared to last month",
  },
  {
    title: "Branches",
    value: "150",
    percentage: "+3%",
    color: "info",
    icon: FaBuilding,
    description: "Active branches",
  },

 
];

export default kpis;