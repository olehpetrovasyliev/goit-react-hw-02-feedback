import React, { Component } from 'react';
import {
  FlexWrapper,
  StatsInfoItem,
  StatsInfoList,
  StyledButton,
} from './Feedback.styled';

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
          {Object.keys(this.state).map(btn => (
            <StyledButton
              key={btn}
              type="button"
              onClick={() => {
                this.leaveAnyFeedback(btn);
              }}
            >
              {btn}
            </StyledButton>
          ))}
        </FlexWrapper>
        <h2>Statistics</h2>
        <div>
          {total > 0 ? (
            <StatsInfoList key={crypto.randomUUID()}>
              {Object.entries(this.state).map(([key, value]) => (
                <StatsInfoItem>
                  {key}: {value}
                </StatsInfoItem>
              ))}
              <StatsInfoItem key={crypto.randomUUID()}>
                Total: {total}
              </StatsInfoItem>
              <StatsInfoItem key={crypto.randomUUID()}>
                Positive Feedback:
                {' ' + ((this.state.good / total) * 100).toFixed(0) + '%'}
              </StatsInfoItem>
            </StatsInfoList>
          ) : (
            <h3>No feedback</h3>
          )}
        </div>
      </>
    );
  }
}
