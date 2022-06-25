import clsx from 'clsx';
import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [previous, setPrevious] = useState('0');
  const [current, setCurrent] = useState('0');
  const [operation, setOperation] = useState('');

  const handleClickKey = ({ target }) => {
    const { attributes }  = target;

    const value = attributes['data-button'].value;

    if (value === 'RESET') {

      return
    }

    if (value === '=') {

      return
    }

    if (value === 'DEL') {

      return
    }


    if (value === '+' || value === '-' || value === 'x' || value === '/') {
      setOperation(value);
      setPrevious(current);
      setCurrent('0');

      return
    }

    // else 

    if (current === '0') {
      setCurrent(value)
    } else {
      setCurrent(current.concat(value))
    }
  }

  return (
    <div className={styles.App}>
      <div className={styles.calculator}>
        <h2 className={styles.title}>
          calc
        </h2>

        <div className={styles.screen}>
          {current}
        </div>


        <div className={styles.grid}>
            <button className={styles.key} data-button={7} onClick={handleClickKey}>
              7
            </button>
            <button className={styles.key} data-button={8} onClick={handleClickKey}>
              8
            </button>
            <button className={styles.key} data-button={9} onClick={handleClickKey}>
              9
            </button>
            <button className={clsx(styles.key, styles.blueButton)} data-button="DEL" onClick={handleClickKey}>
              DEL
            </button>


            <button className={styles.key} data-button={4} onClick={handleClickKey}>
              4
            </button>
            <button className={styles.key} data-button={5} onClick={handleClickKey}>
              5
            </button>
            <button className={styles.key} data-button={6} onClick={handleClickKey}>
              6
            </button>
            <button className={styles.key} data-button="+" onClick={handleClickKey}>
              +
            </button>


            <button className={styles.key} data-button={1} onClick={handleClickKey}>
              1  
            </button>
            <button className={styles.key} data-button={2} onClick={handleClickKey}>
              2
            </button>
            <button className={styles.key} data-button={3} onClick={handleClickKey}>
              3
            </button>
            <button className={styles.key} data-button="-" onClick={handleClickKey}>
              -
            </button>



            <button className={styles.key} data-button="." onClick={handleClickKey}>
              .
            </button>
            <button className={styles.key} data-button={0} onClick={handleClickKey}>
              0
            </button>
            <button className={styles.key} data-button="/" onClick={handleClickKey}>
              /
            </button>
            <button className={styles.key} data-button="x" onClick={handleClickKey}>
              x
            </button>

            <button className={clsx(styles.key, styles.largeKey, styles.blueButton)} data-button="RESET" onClick={handleClickKey}>
              RESET
            </button>
            <button className={clsx(styles.key, styles.largeKey, styles.redButton)} data-button="=" onClick={handleClickKey}>
              =
            </button>
        </div>
      </div>
    </div>
  );
}

export default App;
