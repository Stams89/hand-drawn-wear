import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../services/contexts/AuthContext";


export const Header = () => {
    const { user } = useContext(AuthContext);
    
    return (
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <a href="" className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-weight-semi-bold" style={{ fontFamily: "curve" }}>
                    Stamsy Art
                </h1>
            </a>
            <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
            >
                <div className="navbar-nav ml-auto py-0" >
                    <Link to="/" style={{ marginRight: "30px" }}>Home </Link>

                    <Link to="/catalog" style={{ marginRight: "30px" }}> Catalog </Link>
                    <Link to="/details" style={{ marginRight: "30px" }}> Details</Link>

                    {user.email
                        ? <div id="user">
                            <Link to="/add" style={{ marginRight: "30px" }}>Add Product</Link>
                            <Link to="/logout" style={{ marginRight: "30px" }}>Logout</Link>
                        </div>
                        : <div id="guest">
                            <Link to="/login" style={{ marginRight: "30px" }}> Login</Link>
                            <Link to="/register"> Register</Link>
                        </div>
}
            </div>
            </div>
        </nav>
    )
}