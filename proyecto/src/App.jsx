import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './Componentes/Header/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Products from './Componentes/Products/Products';
import Detail from './Componentes/Detail/Detail';
import Favorites from './Componentes/Favorites/Favorites';

import userList from './Data/Users.json';
import Login from './Componentes/Login/Login';
import Profile from './Componentes/Profile/Profile';
import AuthRoute from './Componentes/AuthRoute/AuthRoute';


function App() {
  const [productsList, setProductsList] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const loginUser = (formData) => {
    const findUser = userList.find(
      (user) => user.email === formData.email && user.password === formData.password
    );
    if (findUser) {
      setUser(findUser);
      navigate('/');
    } else {
      setUser(false);
    }
  };

  const addFavorites = (id) => {
    const findElement = favorites.find((element) => element.id === id);
    if (!findElement) {
      const findProduct = productsList.find((product) => product.id === id);
      setFavorites([...favorites, findProduct]);
    }
  };

  const removeFavorites = (id) => {
    const deleteFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(deleteFavorites);
  };

   useEffect(() => {
     axios.get('https://648444a2ee799e3216267233.mockapi.io/AppleProducts')
       .then((response) => {
         console.log(response.data);
         setProductsList(response.data);
       })
       }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route
          path="/Products"
          element={<Products products={productsList} favorites={addFavorites} />}
        />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} removeFavorites={removeFavorites} />}
        />
        <Route path="/detail/:id" element={<Detail products={productsList} />} />

        <Route path="/login" element={<Login loginUser={loginUser} />} />

        <Route
          path="/profile"
          element={<AuthRoute user={user} component={<Profile user={user} />} />}
        />

        <Route path="/*" element={<h1>Oops Not Found!</h1>} />
      </Routes>
    </div>
  );
}

export default App;

