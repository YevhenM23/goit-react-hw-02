import styles from './Feedback.module.css'

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
    return (
        <div className={styles.feedbackWrapper}>
            <ul className={styles.feedbackList}>
                <li className={styles.itemGood}>Good: {feedback.good}</li>
                <li className={styles.itemNeutral}>Neutral: {feedback.neutral}</li>
                <li className={styles.itemBad}>Bad: {feedback.bad}</li>
                <li className={styles.itemTotal}>Total: {totalFeedback}</li>
                <li className={styles.itemPositive}>Positive: {positiveFeedback}%</li>
                
            </ul>
       </div>
    );
};

export default Feedback;