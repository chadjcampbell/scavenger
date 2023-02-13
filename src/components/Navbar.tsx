import { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuRef = useRef<HTMLInputElement | null>(null);

  const closeMenu = () => {
    const menu = menuRef.current;
    menu && (menu.checked = false);
  };

  return (
    <header className="header">
      <Link to={`/`} className="logo">
        <img src="./magnifyingGlass.svg" alt="logo" />
      </Link>

      <input
        ref={menuRef}
        className="side-menu"
        type="checkbox"
        id="side-menu"
      />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line"></span>
      </label>

      <nav className="nav">
        <ul className="menu">
          <li>
            <Link onClick={closeMenu} to={`/home`}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to={`/play`}>
              Play
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to={`/leaderboard`}>
              Leaderboard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
