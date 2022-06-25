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
      </div>
    </div>
  );
}

export default App;
