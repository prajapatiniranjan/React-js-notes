import { Link, Outlet } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function Layout() {
  return (
    <>
      <header style={{ backgroundColor: "grey", height: "40px" }}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" href="#">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" aria-disabled="true">
                    Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
      <footer>
        <div style={{ backgroundColor: "black" }}>
          <p>Quick Links</p>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "20px",
              color: "black",
              marginLeft: "40%",
            }}
          >
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Layout;
