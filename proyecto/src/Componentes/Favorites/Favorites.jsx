import './Favorites.css';
import { useDiscountContext } from "../Context/Discount";

const Favorites = ({ favorites, removeFavorites }) => {
  const descuentos = useDiscountContext();

  const handleDiscountChange = (e) => {
    const selectedDiscount = e.target.value;
    console.log("Descuento seleccionado:", selectedDiscount);
  };

  return (
    <div>
      <h1 className='h1fav'>Cart!</h1>
      <div className="favorites-container">
        {favorites.map((favorite) => (
          <div key={favorite.id} className="favorite-card">
            <img src={favorite.image} alt={favorite.name} />
            <h3>{favorite.name}</h3>
            <p>{favorite.description}</p>
            <button onClick={() => removeFavorites(favorite.id)}>Eliminar</button>
          </div>
        ))}
      </div>

      <div>
        Select a Discount:
        <select onChange={handleDiscountChange}>
          {descuentos.map((discount, i) => (
            <option key={i} value={discount}>{discount}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Favorites;
