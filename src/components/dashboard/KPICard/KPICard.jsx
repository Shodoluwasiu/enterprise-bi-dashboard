import "./KPICard.css";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

function KPICard({
  title,
  value,
  percentage,
  icon: Icon,
  color,
}) {
  const isPositive = !percentage.startsWith("-");

  return (
    <div className="card dashboard-card shadow-sm border-0 h-100">
      <div className="card-body">

        <div className="d-flex justify-content-between align-items-start">

          <div>

            <h6 className="text-muted mb-2">
              {title}
            </h6>

            <h3 className="fw-bold mb-2">
              {value}
            </h3>


            <div
              className={`d-flex align-items-center gap-2 text-${color}`}
            >
              {isPositive ? (
                <FaArrowTrendUp />
              ) : (
                <FaArrowTrendDown />
              )}

              <small className="fw-bold">
                {percentage}
              </small>
            </div>

          </div>

          <div className={`icon-circle bg-${color}`}>
            <Icon size={24} color="white" />
          </div>

        </div>

      </div>
    </div>
  );
}

export default KPICard;