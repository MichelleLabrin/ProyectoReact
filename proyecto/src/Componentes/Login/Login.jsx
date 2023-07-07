import { useState } from "react";
import "./Login.css";

const initial = {
    email: "",
    password: "",
};

const Login = ({ loginUser }) => {
    const [formData, setFormData] = useState(initial);

    const handleInput = (ev) => {
        const { name, value } = ev.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleClick = () => {
        loginUser(formData);
    };

    return (
        <div className="login-container">
        <form className="login-form" onSubmit={(ev) => ev.preventDefault()}>
        <label htmlFor="email">Email</label>
        <input
            type="text"
            id="email"
            name="email"
            className="login-input"
            onInput={handleInput}
            value={formData.email}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
            type="password"
            id="password"
            name="password"
            className="login-input"
            onInput={handleInput}
            value={formData.password}
        />
        <br />
        <button type="button" className="login-button" onClick={handleClick}>
            Iniciar sesión
        </button>
        <input type="submit" value="Cancelar" className="cancel-button" />
        </form>
    </div>
    );
};

export default Login;
