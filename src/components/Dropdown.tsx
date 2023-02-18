import styles from "../styles/Play.module.css";

type DropdownProps = {
  dropdownDisplay: boolean;
  dropdownPosition: { x: number; y: number };
  yodaPosition: { x: number; y: number };
  jabbaPosition: { x: number; y: number };
  landoPosition: { x: number; y: number };
  setYodaFound: (arg0: boolean) => void;
  setJabbaFound: (arg0: boolean) => void;
  setLandoFound: (arg0: boolean) => void;
};
export const Dropdown = ({
  dropdownDisplay,
  dropdownPosition,
}: DropdownProps) => {
  return (
    <ul
      style={{
        display: dropdownDisplay ? "block" : "none",
        position: "absolute",
        left: dropdownPosition.x + "px",
        top: dropdownPosition.y + "px",
      }}
      className={styles.dropdown}
    >
      <li className={styles.dropdownItem} value="jabba">
        Jabba
      </li>
      <li className={styles.dropdownItem} value="lando">
        Lando
      </li>
      <li className={styles.dropdownItem} value="yoda">
        Yoda
      </li>
    </ul>
  );
};

export default Dropdown;
