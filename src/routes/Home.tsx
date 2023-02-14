import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.card}>
        <article>
          <section className={styles.top}>
            <h2>Google Chrome</h2>
            <p>
              Google Chrome is a web browser developed by Google, released in
              2008. Chrome is the world's most popular web browser today!
            </p>
          </section>
          <section className={styles.bottom}>
            <div className={styles.miniCard}>
              <img src="./magnifyingGlass.svg" alt="logo" />
              <h3>Test text</h3>
            </div>
            <div className={styles.miniCard}>
              <img src="./magnifyingGlass.svg" alt="logo" />
              <h3>Test text</h3>
            </div>
            <div className={styles.miniCard}>
              <img src="./magnifyingGlass.svg" alt="logo" />
              <h3>Test text</h3>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Home;
