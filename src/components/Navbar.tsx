import { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const menuRef = useRef<HTMLInputElement | null>(null);

  const closeMenu = () => {
    const menu = menuRef.current;
    menu && (menu.checked = false);
  };

  return (
    <header className={styles.header}>
      <Link to={`/`} className={styles.logo}>
        <img src="./magnifyingGlass.svg" alt="logo" />
      </Link>

      <input
        ref={menuRef}
        className={styles.sideMenu}
        type="checkbox"
        id="side-menu"
      />
      <label className={styles.hamb} htmlFor="side-menu">
        <span className={styles.hambLine}></span>
      </label>

      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <Link onClick={closeMenu} to={`/`}>
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
