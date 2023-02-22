import { useEffect } from "react";
import styles from "../styles/Play.module.css";

type ToastProps = {
  message: string;
  setToastMessage: (arg0: string) => void;
};

const Toast = ({ message, setToastMessage }: ToastProps) => {
  const shadowColor =
    message == "Try Again" ? "0px 0px 10px 0px red;" : "0px 0px 10px 0px green";

  useEffect(() => {
    const interval = setInterval(() => {
      setToastMessage("");
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [message]);
  return message == "" ? null : (
    <div style={{ boxShadow: shadowColor }} className={styles.toast}>
      {message}
    </div>
  );
};

export default Toast;
