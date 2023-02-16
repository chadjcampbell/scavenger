import { useState } from "react";
import { ImageMagnifier } from "../components/ImageMagnifier";
import Modal from "../components/Modal";
import Scoreboard from "../components/Scoreboard";
import styles from "../styles/Play.module.css";

const Play = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [name, setName] = useState("");
  const [running, setRunning] = useState(false);
  const [modalMessage, setModalMessage] = useState(
    "Enter your name for the leaderboard"
  );

  return (
    <div className={styles.play}>
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
    </div>
  );
};

export default Play;
