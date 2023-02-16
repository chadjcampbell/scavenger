import { useState } from "react";
import { ImageMagnifier } from "../components/ImageMagnifier";
import Modal from "../components/Modal";
import styles from "../styles/Play.module.css";

const Play = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [modalMessage, setModalMessage] = useState(
    "Enter your name for the leaderboard"
  );

  return (
    <div className={styles.play}>
      {modalIsOpen && (
        <Modal setModalIsOpen={setModalIsOpen} modalMessage={modalMessage} />
      )}
      <ImageMagnifier width="100%" src="./sw-wheres-waldo.jpg" />
    </div>
  );
};

export default Play;
