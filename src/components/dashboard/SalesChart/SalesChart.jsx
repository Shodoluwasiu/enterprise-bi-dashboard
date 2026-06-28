import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import salesData from "../../../data/sales";

function SalesChart() {
  return (
    <div className="card shadow-sm border-0 mt-4">
      <div className="card-body">
        <h5 className="fw-bold mb-4">Sales by Category</h5>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="category" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="sales" fill="#198754" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SalesChart;