import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ onLeaveFeedback } ) => (
  <ul className={css.feedback} >
    <button className={css.button} type="button" name="good" onClick={onLeaveFeedback}>Good</button>
    <button className={css.button} type="button" name="neutral" onClick={onLeaveFeedback}>Neutral</button>
    <button className={css.button} type="button" name="bad" onClick={onLeaveFeedback}>Bad</button> 
  </ul>
)

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
