import { MouseEvent, useEffect, useRef, useState } from "react";
import Dropdown from "../components/Dropdown";
import ImageMagnifier from "../components/ImageMagnifier";
import Modal from "../components/Modal";
import Scoreboard from "../components/Scoreboard";
import styles from "../styles/Play.module.css";

const Play = () => {
  //character positions
  const [yodaPosition, setYodaPosition] = useState({ x: 0, y: 0 });
  const [jabbaPosition, setJabbaPosition] = useState({ x: 0, y: 0 });
  const [landoPosition, setLandoPosition] = useState({ x: 0, y: 0 });

  //characters found
  const [yodaFound, setYodaFound] = useState(false);
  const [jabbaFound, setJabbaFound] = useState(false);
  const [landoFound, setLandoFound] = useState(false);

  const [totalTime, setTotalTime] = useState("00:00");
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [name, setName] = useState("");
  const [running, setRunning] = useState(false);
  const [dropdownDisplay, setDropdownDisplay] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
  const [modalMessage, setModalMessage] = useState(
    "Enter your name for the leaderboard"
  );
  const imageRef = useRef<HTMLImageElement>(null);

  //responsive location of characters based on image size
  useEffect(() => {
    imageRef.current &&
      setJabbaPosition({
        x: imageRef.current.offsetWidth * 0.615,
        y: imageRef.current?.offsetHeight * 0.93,
      });
    imageRef.current &&
      setYodaPosition({
        x: imageRef.current.offsetWidth * 0.81,
        y: imageRef.current?.offsetHeight * 0.75,
      });
    imageRef.current &&
      setLandoPosition({
        x: imageRef.current.offsetWidth * 0.395,
        y: imageRef.current?.offsetHeight * 0.63,
      });
  }, [modalIsOpen]);

  //any time a character is found, check for win
  useEffect(() => {
    if (yodaFound && jabbaFound && landoFound) {
      setRunning(false);
      setModalMessage("Well done!");
      setModalIsOpen(true);
    }
  }, [jabbaFound, yodaFound, landoFound]);

  //open the dropdown if it isn't already open and modal isn't open
  const handleDropdown = (e: MouseEvent) => {
    if (!modalIsOpen && !dropdownDisplay) {
      const elem = e.currentTarget;
      const { top, left } = elem.getBoundingClientRect();
      // calculate cursor position on the image, offset dropdown to the right
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
      <Scoreboard
        yodaFound={yodaFound}
        landoFound={landoFound}
        jabbaFound={jabbaFound}
        running={running}
        name={name}
        setTotalTime={setTotalTime}
      />
      {modalIsOpen && (
        <Modal
          setRunning={setRunning}
          name={name}
          setName={setName}
          setModalIsOpen={setModalIsOpen}
          modalMessage={modalMessage}
          totalTime={totalTime}
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
        yodaPosition={yodaPosition}
        jabbaPosition={jabbaPosition}
        landoPosition={landoPosition}
        setYodaFound={setYodaFound}
        setJabbaFound={setJabbaFound}
        setLandoFound={setLandoFound}
        setDropdownDisplay={setDropdownDisplay}
      />
    </div>
  );
};

export default Play;
