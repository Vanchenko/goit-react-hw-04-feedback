import { useState } from 'react';
import { Section } from './Section/Section'
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => { return good + neutral + bad };
  
  const countPositiveFeedbackPercentage = () => { return Math.round(good / countTotalFeedback() * 100) };
  
  const btnClick = (evt) => {
    const name = evt.currentTarget.name;
      if (name === 'good') {
        setGood(good + 1);
      }
      if (name === 'neutral') {
        setNeutral(neutral + 1);
      }
      if (name === 'bad') {
        setBad(bad + 1);
      }
    }
  
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={btnClick} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percent={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};
