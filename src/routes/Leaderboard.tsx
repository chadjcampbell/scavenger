import styles from "../styles/Leaderboard.module.css";
import { doc, DocumentData, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

type userInfo = { name: string; totalTime: string };

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<DocumentData | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "myApp", "leaderboard"), (doc) => {
      setLeaderboard(doc.data());
      setLoading(false);
    });
    return () => {
      unsub();
    };
  }, []);

  const sortLeaders = (a: userInfo, b: userInfo) => {
    const aNumTime = Number(a.totalTime.replace(":", ""));
    const bNumTime = Number(b.totalTime.replace(":", ""));
    return aNumTime - bNumTime;
  };

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
                  leaderboard?.leaders
                    .sort(sortLeaders)
                    .map((data: userInfo, index: number) => (
                      <tr key={data.name}>
                        <td>
                          <h2>{`#${index + 1}`}</h2>
                        </td>
                        <td>
                          <h2>{data.name}</h2>
                        </td>
                        <td>
                          <h2>{data.totalTime}</h2>
                        </td>
                      </tr>
                    ))
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
