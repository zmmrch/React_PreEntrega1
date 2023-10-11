import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg" id="navBar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle me-5"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hombre
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Destacados
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Calzado
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ropa
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle me-5"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mujer
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Destacados
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Calzado
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ropa
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle me-5"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Niño/a
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Destacados
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Calzado
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ropa
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
