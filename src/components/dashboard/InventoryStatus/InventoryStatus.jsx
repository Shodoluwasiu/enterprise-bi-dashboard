import inventory from "../../../data/inventory";

function InventoryStatus() {
  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">

        <h5 className="fw-bold mb-4">
          Inventory Status
        </h5>

        {inventory.map((item) => (

          <div
            key={item.product}
            className="mb-4"
          >

            <div className="d-flex justify-content-between">

              <span>{item.product}</span>

              <span>{item.stock}</span>

            </div>

            <div className="progress mt-2">

              <div
                className="progress-bar"
                style={{
                  width: `${item.stock/15}%`
                }}
              />

            </div>

          </div>

        ))}

      </div>
    </div>
  );
}

export default InventoryStatus;