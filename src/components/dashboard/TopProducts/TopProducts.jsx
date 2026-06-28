import topProducts from "../../../data/topProducts";

function TopProducts() {
  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">

        <h5 className="fw-bold mb-4">
          Top Selling Products
        </h5>

        {topProducts.map((product) => (

          <div
            key={product.id}
            className="d-flex justify-content-between align-items-center border-bottom py-3"
          >
            <div>

              <h6>{product.name}</h6>

              <small className="text-muted">
                Sold: {product.sold}
              </small>

            </div>

            <span className="fw-bold">
              {product.revenue}
            </span>

          </div>

        ))}

      </div>
    </div>
  );
}

export default TopProducts;