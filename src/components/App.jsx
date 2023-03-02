import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setbad] = useState(0);

  const clickButton = option => {
    console.log(option);

    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setneutral(neutral + 1);
        break;
      case 'bad':
        setbad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const countPositive = (good / countTotalFeedback()) * 100;
    let precentageFeedback = Math.round(countPositive);
    return precentageFeedback;
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={clickButton}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={
              isNaN(countPositiveFeedbackPercentage())
                ? 0
                : countPositiveFeedbackPercentage()
            }
          />
        )}
      </Section>
    </>
  );
};
