function DashboardHeader() {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h2 className="fw-bold mb-1">Dashboard</h2>
        <p className="text-muted mb-0">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      <button className="btn btn-primary">
        Download Report
      </button>
    </div>
  );
}

export default DashboardHeader;