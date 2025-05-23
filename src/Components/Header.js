import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/registration">
                  Registration
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/registration1">
                  Registration1
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/favoritecolor">
                  Favorite Color
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/quiz">
                  Quiz
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/cardgame">
                  CardGame
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/fetch">
                  Fetch-Data
                </Link> */}
              {/* </li> */}
              <li className="nav-item">
                <Link className="nav-link active" to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
