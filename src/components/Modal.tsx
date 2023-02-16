import { FormEvent, SyntheticEvent } from "react";
import styles from "../styles/Play.module.css";

type ModalProps = {
  setModalIsOpen: (arg0: boolean) => void;
  modalMessage: string;
};

const Modal = ({ setModalIsOpen, modalMessage }: ModalProps) => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setModalIsOpen(false);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>{modalMessage}</h2>
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
          <input
            className={styles.modalInput}
            type="text"
            minLength={2}
            maxLength={20}
            placeholder="Enter Name"
            required
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
