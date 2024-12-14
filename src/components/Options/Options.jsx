import styles from './Options.module.css'

const Options = ({ handleClick, totalFeedback }) => {
    return (
        <div className={styles.optionsWrapper}>
            <button className={styles.btnGood} onClick={() => handleClick('good')}>Good</button>
            <button className={styles.btnNeutral} onClick={() => handleClick('neutral')}>Neutral</button>
            <button className={styles.btnBad} onClick={() => handleClick('bad')}>Bad</button>
            {totalFeedback > 0 && <button className={styles.btnReset}  onClick={() => handleClick('reset')}>Reset</button>}
        </div>
    );
};

export default Options;