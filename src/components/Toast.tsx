import styles from "../styles/Play.module.css";

type ToastProps = {
  message: string;
};

const Toast = ({ message }: ToastProps) => {
  return <div className={styles.tryAgain}>{message}</div>;
};

export default Toast;
