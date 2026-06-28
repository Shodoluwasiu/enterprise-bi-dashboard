import "./KPICard.css";

function KPICard({
  title,
  value,
  percentage,
  icon,
  color,
}) {
  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">

        <div className="d-flex justify-content-between">

          <div>

            <h6 className="text-muted">

              {title}

            </h6>

            <h3 className="fw-bold">

              {value}

            </h3>

            <small
              className={`fw-bold text-${color}`}
            >
              {percentage}
            </small>

          </div>

          <div
            className={`icon-circle bg-${color}`}
          >
            {icon}
          </div>

        </div>

      </div>
    </div>
  );
}

export default KPICard;