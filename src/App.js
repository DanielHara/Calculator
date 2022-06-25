import clsx from 'clsx';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.calculator}>
        <h2 className={styles.title}>
          calc
        </h2>

        <div className={styles.screen}>
          399,981
        </div>


        <div className={styles.grid}>
            <button className={styles.key}>
              7
            </button>
            <button className={styles.key}>
              8
            </button>
            <button className={styles.key}>
              9
            </button>
            <button className={clsx(styles.key, styles.blueButton)}>
              DEL
            </button>


            <button className={styles.key}>
              4
            </button>
            <button className={styles.key}>
              5
            </button>
            <button className={styles.key}>
              6
            </button>
            <button className={styles.key}>
              +
            </button>


            <button className={styles.key}>
              1  
            </button>
            <button className={styles.key}>
              2
            </button>
            <button className={styles.key}>
              3
            </button>
            <button className={styles.key}>
              -
            </button>



            <button className={styles.key}>
              .
            </button>
            <button className={styles.key}>
              0
            </button>
            <button className={styles.key}>
              /
            </button>
            <button className={styles.key}>
              x
            </button>

            <button className={clsx(styles.key, styles.largeKey, styles.blueButton)}>
              RESET
            </button>
            <button className={clsx(styles.key, styles.largeKey, styles.redButton)}>
              =
            </button>
        </div>
      </div>
    </div>
  );
}

export default App;
