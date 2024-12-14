import styles from './Description.module.css'

const Description = () => {
    return (
        <div>
            <h1 className={styles.cafeTitle}>Sip Happens Café</h1>
            <p className={styles.cafePar}>Please leave your feedback about our service by selecting one of the options below.</p>
        </div>
      );
};


export default Description;