import { MouseEvent, useRef, useState } from "react";
import Dropdown from "../components/Dropdown";
import ImageMagnifier from "../components/ImageMagnifier";
import Modal from "../components/Modal";
import Scoreboard from "../components/Scoreboard";
import styles from "../styles/Play.module.css";

const Play = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [name, setName] = useState("");
  const [running, setRunning] = useState(false);
  const [dropdownDisplay, setDropdownDisplay] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
  const [modalMessage, setModalMessage] = useState(
    "Enter your name for the leaderboard"
  );
  const imageRef = useRef<HTMLImageElement>(null);

  const handleDropdown = (e: MouseEvent) => {
    if (!modalIsOpen && !dropdownDisplay) {
      const elem = e.currentTarget;
      const { top, left } = elem.getBoundingClientRect();
      // calculate cursor position on the image
      const x = e.pageX - left + 20 - window.pageXOffset;
      const y = e.pageY - top - window.pageYOffset;
      setDropdownDisplay(true);
      setDropdownPosition({ x: x, y: y });
      console.log(dropdownPosition);
      console.log(imageRef.current?.offsetHeight);
      console.log(imageRef.current?.offsetWidth);
    } else {
      setDropdownDisplay(false);
    }
  };

  return (
    <div onClick={(e) => handleDropdown(e)} className={styles.play}>
      {/*TODO - use these + imageRef to find responsive value of characters */}
      <div style={{ position: "absolute", zIndex: "5" }}>
        <div style={{ color: "white" }}>o</div>
        <div style={{ color: "white" }}>o</div>
        <div style={{ color: "white" }}>o</div>
      </div>
      <Scoreboard running={running} name={name} />
      {modalIsOpen && (
        <Modal
          setRunning={setRunning}
          setName={setName}
          setModalIsOpen={setModalIsOpen}
          modalMessage={modalMessage}
        />
      )}
      <ImageMagnifier
        ref={imageRef}
        height="auto"
        magnifierHeight={100}
        magnifieWidth={100}
        zoomLevel={1.5}
        width="100%"
        src="./sw-wheres-waldo.jpg"
      />
      <Dropdown
        dropdownPosition={dropdownPosition}
        dropdownDisplay={dropdownDisplay}
      />
    </div>
  );
};

export default Play;
