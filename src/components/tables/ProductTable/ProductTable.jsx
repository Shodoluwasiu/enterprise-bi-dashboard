// Create Product Table
import useProducts from "../../../hooks/useProducts";

function ProductTable() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <h5>Loading products...</h5>;
  }

  if (error) {
    return <h5>{error}</h5>;
  }

  return (
    <div className="card shadow-sm border-0 mt-4">
      <div className="card-body">
        <h5 className="fw-bold mb-3">Products</h5>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Product</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Price ($)</th>
                <th>Stock</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.brand}</td>
                  <td>{product.category}</td>
                  <td>${product.price}</td>
                  <td>{product.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;