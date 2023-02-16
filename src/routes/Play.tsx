import { useEffect } from "react";
import { ImageMagnifier } from "../components/ImageMagnifier";
import styles from "../styles/Play.module.css";

const Play = () => {
  return (
    <div className={styles.play}>
      <ImageMagnifier width="100%" src="./sw-wheres-waldo.jpg" />
    </div>
  );
};

export default Play;
