import React, { useContext, useState } from 'react';
import { DiscountContext } from "../Context/Discount";
import './Favorites.css';

const Favorites = ({ favorites, removeFavorites }) => {
  const context = useContext(DiscountContext);
  const [selectedDiscount, setSelectedDiscount] = useState('');

  const handleDiscountChange = (event) => {
    setSelectedDiscount(event.target.value);
  };

  return (
    <div>
      <h1 className='h1fav'>Your Products</h1>
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
      {favorites.length > 0 && (
        <select value={selectedDiscount} onChange={handleDiscountChange}>
          <option value="">Selecciona un descuento</option>
          {context.state.discount.map((discount, index) => (
            <option key={index} value={discount}>{discount}</option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Favorites;