import { MouseEvent, useEffect, useState } from "react";
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

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleDropdown = (e: MouseEvent) => {
    if (!modalIsOpen && !dropdownDisplay) {
      const elem = e.currentTarget;
      const { top, left } = elem.getBoundingClientRect();
      // calculate cursor position on the image
      const x = e.pageX - left + 20 - window.pageXOffset;
      const y = e.pageY - top - window.pageYOffset;
      setDropdownDisplay(true);
      setDropdownPosition({ x: x, y: y });
    } else {
      setDropdownDisplay(false);
    }
  };

  return (
    <div onClick={(e) => handleDropdown(e)} className={styles.play}>
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

      <Dropdown
        dropdownPosition={dropdownPosition}
        dropdownDisplay={dropdownDisplay}
      />
    </div>
  );
};

export default Play;
