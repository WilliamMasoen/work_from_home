import logo from "../assets/images/Logo.png";
import { HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState, useRef } from "react";
import "../styles/Nav.css";
// import NavSmall from "./NavSmall";

interface NavButtons {
  button: string;
  link: string;
}

function Nav() {
  const NavButtonsList: NavButtons[] = [
    {
      button: "Home",
      link: "https://aliantomasoen.com/",
    },
    {
      button: "About Us",
      link: "#about-us",
    },
    {
      button: "Our Projects",
      link: "https://aliantomasoen.com/projects",
    },
  ];

  const [toggleMenu, setToggleMenu] = useState(false);
  const [isUnclickedIcon, setIcon] = useState(true);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
    setIcon(!isUnclickedIcon);
  };

  const UnclickedIcon = () => (
    <HiBars3 className="dropdown-button" onClick={handleToggle} />
  );
  const ClickedIcon = () => (
    <RxCross1 className="dropdown-button" onClick={handleToggle} />
  );

  let menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", (event: any) => {
      if (!menuRef.current.contains(event.target)) {
        setToggleMenu(false);
        setIcon(true);
      }
    });
  });

  return (
    <>
      <nav className="nav-bar" id="nav-bar">
        {/* Website Logo */}
        <div id="web-logo">
          <a href="https://aliantomasoen.com/">
            <img src={logo} />
          </a>
        </div>

        {/* Navigation Buttons */}
        <div className="nav-buttons">
          <ul className="nav-buttons-list">
            {NavButtonsList.map((buttonItem) => {
              return (
                <>
                  <li className="nav-buttons-item">
                    <a href={buttonItem.link}>{buttonItem.button}</a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>

        {/* Navigation Dropdown Menu (Small Screen Size) */}
        <div className="navbar-dropdown" ref={menuRef}>
          {isUnclickedIcon ? <UnclickedIcon /> : <ClickedIcon />}
          <ul
            className={
              toggleMenu === true
                ? "dropdown-content-active"
                : "dropdown-content"
            }
          >
            {NavButtonsList.map((buttonItem) => {
              return (
                <li className="dropdown-item">
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
