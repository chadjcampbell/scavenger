import styles from "../styles/Play.module.css";
import { Stopwatch } from "./Stopwatch";

type ScoreboardProps = {
  name: string;
  running: boolean;
};

const Scoreboard = ({ name, running }: ScoreboardProps) => {
  return (
    <div className={styles.scoreboard}>
      <section className={styles.nameAndScore}>
        <h2 className={styles.name}>{name}</h2>
        <h2 className={styles.score}>
          <Stopwatch running={running} />
        </h2>
      </section>
      <section className={styles.images}>
        <div className={styles.miniCard}>
          <img src="./jabba.png" alt="logo" />
          <h3>Jabba</h3>
        </div>
        <div className={styles.miniCard}>
          <img src="./lando.png" alt="logo" />
          <h3>Lando</h3>
        </div>
        <div className={styles.miniCard}>
          <img src="./yoda.png" alt="logo" />
          <h3>Yoda</h3>
        </div>
      </section>
    </div>
  );
};

export default Scoreboard;
