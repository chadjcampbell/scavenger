import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.card}>
        <article>
          <section className={styles.top}>
            <h2>Welcome to Scavenger!</h2>
            <p>
              It will be a race against the clock to find the three characters
              below in the Star Wars-themed Where's Waldo-style image. Enter
              your name and compete for a spot on the global leaderboard.
              Navigate to the Play section in the menu above to get started!
            </p>
          </section>
          <section className={styles.bottom}>
            {" "}
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
        </article>
      </div>
    </div>
  );
};

export default Home;
