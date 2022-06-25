import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.calculator}>
        <h2>
          calc
        </h2>

        <div className={styles.screen}>
          399,981
        </div>


        <div className={styles.keypad}>
          <div className={styles.row}>
            <button className={styles.key}>
              7
            </button>
            <button className={styles.key}>
              8
            </button>
            <button className={styles.key}>
              9
            </button>
            <button className={styles.key}>
              DEL
            </button>
          </div>

          <div className={styles.row}>
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
          </div>

          <div className={styles.row}>
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
          </div>

          <div className={styles.row}>
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
          </div>

          <div className={styles.row}>
            <button className={styles.key}>
              RESET
            </button>
            <button className={styles.key}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
