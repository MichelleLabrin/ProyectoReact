import { Link } from "react-router-dom";
import './Products.css';

function Products({ products, favorites }) {
  const addElement = (id) => {
    favorites(id);
  };

  return (
    <div className="products-container">
      <h1>Shop Now!</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/detail/${product.id}`}>{product.name}</Link>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addElement(product.id)}>Comprar✨</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;