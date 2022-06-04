import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="Header">
      <div className="Header__container">
        <a href="/">
          <img src="/Logo.svg" alt="Logo" />
        </a>

        <div className="Header__container--actions">
          <button onClick={handleToggle}>
            <svg width="1em" height="1em" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
              ></path>
            </svg>
          </button>

          {isOpen && (
            <div className="Header__container--actions-menu">
              <button onClick={handleClose}>
                <svg width="1em" height="1em" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m12 10.586l4.95-4.95l1.414 1.414l-4.95 4.95l4.95 4.95l-1.414 1.414l-4.95-4.95l-4.95 4.95l-1.414-1.414l4.95-4.95l-4.95-4.95L7.05 5.636z"
                  ></path>
                </svg>
              </button>

              <ul>
                <li>
                  <a href="/blogs">Blogs</a>
                </li>
                <li>
                  <a href="/portfolio">My Portfolio</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
