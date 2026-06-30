// import {
//   FaMoneyBillWave,
//   FaShoppingCart,
//   FaUsers,
//   FaWarehouse,
//   FaChartLine,
//   FaBuilding,
// } from "react-icons/fa";

// import KPICard from "../KPICard/KPICard";
// import kpis from "../../../data/kpis";

// function KPIGrid() {

//   const cards = [

//     {
//       title: "Revenue",
//       value: "₦28.4M",
//       percentage: "+12%",
//       color: "success",
//       icon: <FaMoneyBillWave />,
//     },

//     {
//       title: "Orders",
//       value: "5,680",
//       percentage: "+8%",
//       color: "primary",
//       icon: <FaShoppingCart />,
//     },

//     {
//       title: "Customers",
//       value: "12,540",
//       percentage: "+15%",
//       color: "warning",
//       icon: <FaUsers />,
//     },

//     {
//       title: "Inventory",
//       value: "1,340",
//       percentage: "-2%",
//       color: "danger",
//       icon: <FaWarehouse />,
//     },

//     {
//       title: "Profit",
//       value: "₦7.2M",
//       percentage: "+5%",
//       color: "success",
//       icon: <FaChartLine />,
//     },

//     {
//       title: "Branches",
//       value: "150",
//       percentage: "+3%",
//       color: "info",
//       icon: <FaBuilding />,
//     },
//   ];

//   return (

//     <div className="row g-4">

//       {cards.map((card) => (

//         <div
//           key={card.title}
//           className="col-lg-4 col-md-6"
//         >
//           <KPICard {...card} />
//         </div>

//       ))}

//     </div>

//   );
// }

// export default KPIGrid;
import KPICard from "../KPICard/KPICard";
import kpis from "../../../data/kpis";

function KPIGrid() {
  return (
    <div className="row g-4">
      {kpis.map((card) => (
        <div
          key={card.title}
          className="col-lg-4 col-md-6"
        >
          <KPICard {...card} />
        </div>
      ))}
    </div>
  );
}

export default KPIGrid;