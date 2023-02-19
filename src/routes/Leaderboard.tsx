import styles from "../styles/Leaderboard.module.css";
import { doc, DocumentData, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState<DocumentData | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "myApp", "leaderboard"), (doc) => {
      setLeaders(doc.data());
      setLoading(false);
    });
    return () => {
      unsub();
    };
  }, []);

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
                {loading ? (
                  <tr>
                    <td>Loading...</td>
                  </tr>
                ) : (
                  leaders?.leader.map(
                    (data: { name: string; totalTime: string }) => (
                      <tr key={data.name}>
                        <td>
                          <h2>{data.name}</h2>
                        </td>
                        <td>
                          <h2>{data.totalTime}</h2>
                        </td>
                      </tr>
                    )
                  )
                )}
              </tbody>
            </table>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Leaderboard;
