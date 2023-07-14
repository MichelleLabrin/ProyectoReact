import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/Products">Products</Link>
            </div>

            <div>
                <Link to="/favorites">Cart</Link>
            </div>

            <div>
                <Link to="/Login">Login</Link>
            </div>

            <div>
                <Link to="/Profile">Profile</Link>
            </div>

        </header>
    );
}

export default Header;
