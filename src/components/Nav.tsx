import logo from '../assets/images/Logo.png'
import '../styles/Home.css'

function Nav() {
  return (
    <>
      <nav className="nav-bar">
        {/* Website Logo */}
        <div>
          <a href="http://localhost:5173/">
            <img src={logo} className="web-logo"/> 
          </a>
        </div>

        {/* Navigation Buttons */}
        <div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
