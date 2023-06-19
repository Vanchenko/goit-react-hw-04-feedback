import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={css.feedback}>
    {options.map((elem, idx) => (
      <button
        className={css.button}
        key={idx}
        type="button"
        name={elem}
        onClick={onLeaveFeedback}
      >
        {elem}
      </button>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
