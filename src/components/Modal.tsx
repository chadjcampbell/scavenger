import { FormEvent, SyntheticEvent } from "react";
import styles from "../styles/Play.module.css";

type ModalProps = {
  setModalIsOpen: (arg0: boolean) => void;
  modalMessage: string;
  setName: (arg0: string) => void;
};

const Modal = ({ setModalIsOpen, modalMessage, setName }: ModalProps) => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setModalIsOpen(false);
    const form = e.target as HTMLFormElement;
    setName(form.scoreboardName.value);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>{modalMessage}</h2>
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
      </div>
    </div>
  );
};

export default Modal;
