import styles from "../styles/Leaderboard.module.css";

const Leaderboard = () => {
  const fakeData = [
    { name: "Chad", time: "1m43s" },
    { name: "Bill", time: "2m56s" },
    { name: "Jordan", time: "2m15s" },
    { name: "Ed", time: "3m43s" },
  ];
  return (
    <div className={styles.leaderboard}>
      <div className={styles.card}>
        <article>
          <section className={styles.top}>
            <h2>Leaderboard</h2>
          </section>
          <section className={styles.bottom}>
            <table>
              <tbody>
                {fakeData.map((data) => (
                  <tr key={data.name}>
                    <td>
                      <h2>{data.name}</h2>
                    </td>
                    <td>
                      <h2>{data.time}</h2>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Leaderboard;
