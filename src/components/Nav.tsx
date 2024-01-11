import logo from "../assets/images/Logo.png";
import "../styles/Nav.css";

interface NavButtons {
  button: string;
  link: string;
}

function Nav() {
  const NavButtonsList: NavButtons[] = [
    {
      button: "Home",
      link: "http://localhost:5173/",
    },
    {
      button: "About Us",
      link: "http://localhost:5173/#about-us",
    },
    {
      button: "Our Projects",
      link: "http://localhost:5173/projects",
    },
  ];
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
            {NavButtonsList.map((buttonItem) => {
              return (
                <li className="nav-buttons-item">
                  <a href={buttonItem.link}>{buttonItem.button}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
