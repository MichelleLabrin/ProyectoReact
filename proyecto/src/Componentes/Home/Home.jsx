import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({ products }) => {
  return (
    <div>
      <h1 className= "Welcome">Welcome</h1>
      <h5 className= "LastSale">Last Sales!</h5>
      
      <div className="product-list">
        {products.slice(0, 3).map((product) => (
          <div key={product.id} className="product-card">
            <Link to="/products">
              <img src={product.image} alt={product.name} />
            </Link>
            <Link to="/products">{product.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;


