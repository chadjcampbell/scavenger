import styles from "../styles/Play.module.css";

type ScoreboardProps = {
  name: string;
};

const Scoreboard = ({ name }: ScoreboardProps) => {
  return (
    <div className={styles.scoreboard}>
      <section className={styles.nameAndScore}>
        <h2>{name}</h2>
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
