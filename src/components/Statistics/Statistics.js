import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.statistics}>
    <p>
      Good: <span className={styles.indicator}>{good}</span>
    </p>
    <p>
      Neutral: <span className={styles.indicator}>{neutral}</span>
    </p>
    <p>
      Bad: <span className={styles.indicator}>{bad}</span>
    </p>
    <p>
      Total: <span className={styles.indicator}>{total}</span>
    </p>
    <p>
      Positive Feedback:
      <span className={styles.indicator}>{positivePercentage}%</span>
    </p>
  </div>
);

Statistics.propType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
export default Statistics;
