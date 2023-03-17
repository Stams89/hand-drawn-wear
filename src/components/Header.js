import { Link } from "react-router-dom"

export const Header = () => {
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
                <div className="navbar-nav ml-auto py-0" x >
                    <Link  to="/"  style={{ marginRight: "30px" }}>
                        Home
                    </Link>
                    <Link to="/details" style={{ marginRight: "30px" }}>
                        Details
                    </Link>
                    <Link   to="/contacts" style={{ marginRight: "30px" }}>
                        Contacts
                    </Link>
                    <Link  to="/logout" style={{ marginRight: "30px" }}>
                        Logout
                    </Link>
                    <Link  to="/login" style={{ marginRight: "30px" }}>
                        Login
                    </Link>
                    <Link  to="/register">
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    )
}