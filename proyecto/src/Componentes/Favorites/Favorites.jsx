import './Favorites.css';

const Favorites = ({ favorites, removeFavorites }) => {

  return (
    <div>
      <h1 className='h1fav'>Cart!</h1>
      <div className="favorites-container">
        {favorites.map((favorite) => (
          <div key={favorite.id} className="favorite-card">
            <img src={favorite.image} alt={favorite.name} />
            <h3>{favorite.name}</h3>
            <p>{favorite.description}</p>
            <button onClick={() => removeFavorites(favorite.id)}>Eliminar</button>          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;