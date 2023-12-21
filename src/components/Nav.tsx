import logo from "../assets/images/Logo.png";
import "../styles/Nav.css";

// Refactor Nav bar to use props

function Nav() {
  return (
    <>
      <nav className="nav-bar" id="nav-bar">
        {/* Website Logo */}
        <div id="web-logo">
          <a href="http://localhost:5173/">
            <img src={logo} />
          </a>
        </div>

        {/* Navigation Buttons */}
        <div className="nav-buttons">
          <ul className="nav-buttons-list">
            <li className="nav-buttons-item">
              <a href="http://localhost:5173/">Home</a>
            </li>
            <li className="nav-buttons-item">
              <a href="http://localhost:5173/#about-us">About Us</a>
            </li>
            <li className="nav-buttons-item">
              <a href="http://localhost:5173/projects">Our Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
