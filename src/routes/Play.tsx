import { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import { ImageMagnifier } from "../components/ImageMagnifier";
import Modal from "../components/Modal";
import Scoreboard from "../components/Scoreboard";
import styles from "../styles/Play.module.css";

const Play = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [name, setName] = useState("");
  const [running, setRunning] = useState(false);
  const [dropdownDisplay, setDropdownDisplay] = useState(false);
  const [modalMessage, setModalMessage] = useState(
    "Enter your name for the leaderboard"
  );

  const [mousePos, setMousePos] = useState({ x: "", y: "" });
  const [dropdownPosition, setDropdownPosition] = useState({ x: "", y: "" });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleDropdown = () => {
    setDropdownDisplay(!dropdownDisplay);
    setDropdownPosition(mousePos);
  };

  return (
    <div onClick={handleDropdown} className={styles.play}>
      <Scoreboard running={running} name={name} />
      {modalIsOpen && (
        <Modal
          setRunning={setRunning}
          setName={setName}
          setModalIsOpen={setModalIsOpen}
          modalMessage={modalMessage}
        />
      )}
      <ImageMagnifier width="100%" src="./sw-wheres-waldo.jpg" />
      {!modalIsOpen && (
        <Dropdown
          dropdownPosition={dropdownPosition}
          dropdownDisplay={dropdownDisplay}
        />
      )}
    </div>
  );
};

export default Play;
