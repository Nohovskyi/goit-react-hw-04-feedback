import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statistic__wrap}>
      <p className={css.statistic__text}>Good: {good}</p>
      <p className={css.statistic__text}>Neutral: {neutral}</p>
      <p className={css.statistic__text}>Bad: {bad}</p>
      <p className={css.statistic__text}>Total: {total}</p>
      <p className={css.statistic__text}>
        Positive percentage: {positivePercentage}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
