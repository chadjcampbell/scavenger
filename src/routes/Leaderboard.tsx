import styles from "../styles/Leaderboard.module.css";
import {
  collection,
  doc,
  DocumentData,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import { SetStateAction, useEffect, useState } from "react";

const Leaderboard = () => {
  const fakeData = [
    { name: "Chad", time: "1m43s" },
    { name: "Bill", time: "2m56s" },
    { name: "Jordan", time: "2m15s" },
    { name: "Ed", time: "3m43s" },
  ];
  const [leaders, setLeaders] = useState<DocumentData[]>();
  let tempLeaders: DocumentData[] = [];
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "leaderboard"));

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        tempLeaders?.push(doc.data());
      });
    };
    fetchData().then(() => {
      setLeaders(tempLeaders);
    });
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
                {leaders &&
                  leaders.map((data) => (
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
