import { FormEvent, SyntheticEvent, useEffect, useState } from "react";
import styles from "../styles/Play.module.css";
import {
  arrayUnion,
  doc,
  updateDoc,
  increment,
  onSnapshot,
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
  const [anon, setAnon] = useState("Anonymous#");
  const [loading, setLoading] = useState(true);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setModalIsOpen(false);
    const form = e.target as HTMLFormElement;
    if (form.scoreboardName.value === "") {
      setName(anon);
    } else {
      setName(form.scoreboardName.value);
    }
    setRunning(true);
  };

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "myApp", "leaderboard"), (doc) => {
      const data = doc?.data()?.anon;
      setAnon((anon) => anon + data);
      setLoading(false);
    });
    return () => {
      unsub();
    };
  }, []);

  const updateLeaderboard = async () => {
    await updateDoc(doc(db, "myApp", "leaderboard"), {
      leaders: arrayUnion({
        name,
        totalTime,
      }),
    })
      .then(async () => {
        if (anon !== "Anonymous#") {
          await updateDoc(doc(db, "myApp", "leaderboard"), {
            anon: increment(1),
          });
        }
      })
      .finally(() => {
        navigate("/leaderboard");
      });
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        {loading ? (
          <h2>loading...</h2>
        ) : (
          <>
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
              <form
                onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
              >
                <input
                  autoComplete="off"
                  autoFocus
                  className={styles.modalInput}
                  type="text"
                  minLength={2}
                  maxLength={20}
                  placeholder={anon}
                  id="scoreboardName"
                />

                <button type="submit" className={styles.modalBtn}>
                  Play!
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
