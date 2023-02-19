import { FormEvent, SyntheticEvent } from "react";
import styles from "../styles/Play.module.css";
import {
  collection,
  addDoc,
  arrayUnion,
  doc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

type ModalProps = {
  setModalIsOpen: (arg0: boolean) => void;
  modalMessage: string;
  setName: (arg0: string) => void;
  name: string;
  setRunning: (arg0: boolean) => void;
  totalTime: string;
};

const Modal = ({
  setModalIsOpen,
  modalMessage,
  name,
  setName,
  setRunning,
  totalTime,
}: ModalProps) => {
  const navigate = useNavigate();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setModalIsOpen(false);
    const form = e.target as HTMLFormElement;
    setName(form.scoreboardName.value);
    setRunning(true);
  };
  const updateLeaderboard = async () => {
    await updateDoc(doc(db, "myApp", "leaderboard"), {
      leaders: arrayUnion({
        name,
        totalTime,
      }),
    }).then(() => {
      navigate("/leaderboard");
    });
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>{modalMessage}</h2>
        {totalTime !== "00:00" && (
          <>
            <h2>Name: {name}</h2>
            <h2>Time: {totalTime}</h2>
            <button onClick={updateLeaderboard} className={styles.modalBtn}>
              Submit to Leaderboard
            </button>
          </>
        )}
        {totalTime === "00:00" && (
          <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
            <input
              autoComplete="off"
              autoFocus
              className={styles.modalInput}
              type="text"
              minLength={2}
              maxLength={20}
              placeholder="Enter Name"
              required
              id="scoreboardName"
            />

            <button type="submit" className={styles.modalBtn}>
              Play!
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Modal;
