import { useState } from "react";
import styles from "../styles/Play.module.css";
import { closeEnough } from "../utils/closeEnough";

type DropdownProps = {
  dropdownDisplay: boolean;
  dropdownPosition: { x: number; y: number };
  yodaPosition: { x: number; y: number };
  jabbaPosition: { x: number; y: number };
  landoPosition: { x: number; y: number };
  setYodaFound: (arg0: boolean) => void;
  setJabbaFound: (arg0: boolean) => void;
  setLandoFound: (arg0: boolean) => void;
  setDropdownDisplay: (arg0: boolean) => void;
};
export const Dropdown = ({
  dropdownDisplay,
  dropdownPosition,
  yodaPosition,
  jabbaPosition,
  landoPosition,
  setYodaFound,
  setJabbaFound,
  setLandoFound,
  setDropdownDisplay,
}: DropdownProps) => {
  const [tryAgain, setTryAgain] = useState(false);

  const displayTryAgain = () => {
    setDropdownDisplay(true);
    setTryAgain(true);

    setTimeout(() => {
      setDropdownDisplay(false);
      setTryAgain(false);
    }, 2000);
  };

  const handleJabba = () => {
    if (closeEnough(jabbaPosition, dropdownPosition)) {
      setJabbaFound(true);
    } else {
      displayTryAgain();
    }
  };
  const handleLando = () => {
    if (closeEnough(landoPosition, dropdownPosition)) {
      setLandoFound(true);
    } else {
      displayTryAgain();
    }
  };
  const handleYoda = () => {
    if (closeEnough(yodaPosition, dropdownPosition)) {
      setYodaFound(true);
    } else {
      displayTryAgain();
    }
  };

  return tryAgain ? (
    <ul
      style={{
        display: "block",
        position: "absolute",
        left: dropdownPosition.x + "px",
        top: dropdownPosition.y + "px",
      }}
      className={styles.dropdown}
    >
      <li>Try again</li>
    </ul>
  ) : (
    <ul
      style={{
        display: dropdownDisplay ? "block" : "none",
        position: "absolute",
        left: dropdownPosition.x + "px",
        top: dropdownPosition.y + "px",
      }}
      className={styles.dropdown}
    >
      <li onClick={handleJabba} className={styles.dropdownItem} value="jabba">
        Jabba
      </li>
      <li onClick={handleLando} className={styles.dropdownItem} value="lando">
        Lando
      </li>
      <li onClick={handleYoda} className={styles.dropdownItem} value="yoda">
        Yoda
      </li>
    </ul>
  );
};

export default Dropdown;
