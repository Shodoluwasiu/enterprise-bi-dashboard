import { useState } from "react";
import transactions from "../../../data/transactions";

import SearchBar from "../../filters/SearchBar/SearchBar";
import StatusFilter from "../../filters/StatusFilter/StatusFilter";

function RecentTransactions() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.customer.toLowerCase().includes(search.toLowerCase()) ||
      transaction.product.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      status === "" || transaction.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="card shadow-sm border-0 mt-4">
      <div className="card-body">
        <h5 className="fw-bold mb-4">Recent Transactions</h5>

        <div className="row mb-3">
          <div className="col-md-6">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search customer or product..."
            />
          </div>

          <div className="col-md-3">
            <StatusFilter
              value={status}
              onChange={setStatus}
            />
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.id}</td>
                  <td>{transaction.customer}</td>
                  <td>{transaction.product}</td>
                  <td>{transaction.amount}</td>
                  <td>
                    <span
                      className={`badge bg-${
                        transaction.status === "Completed"
                          ? "success"
                          : transaction.status === "Pending"
                          ? "warning"
                          : transaction.status === "Processing"
                          ? "info"
                          : "danger"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                  <td>{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredTransactions.length === 0 && (
            <p className="text-center text-muted mt-3">
              No transactions found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecentTransactions;