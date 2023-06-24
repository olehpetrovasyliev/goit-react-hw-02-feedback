import React, { Component } from 'react';
import {
  FlexWrapper,
  StatsInfoItem,
  StatsInfoList,
  StyledButton,
} from './Feedback.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveAnyFeedback = key => {
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };
  countTonalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => acc + el, 0);
  };

  render() {
    const total = this.countTonalFeedback();
    return (
      <>
        <FlexWrapper key={crypto.randomUUID()}>
          <FeedbackOptions
            key={crypto.randomUUID()}
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveAnyFeedback}
          />
        </FlexWrapper>
        <h2>Statistics</h2>
        <div>
          {total > 0 ? (
            <>
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={total}
                positivePercentage={
                  ' ' + ((this.state.good / total) * 100).toFixed(0) + '%'
                }
              />
            </>
          ) : (
            <Notification />
          )}
        </div>
      </>
    );
  }
}
