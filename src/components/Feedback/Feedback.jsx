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
  total = 0;
  leaveGoodReview = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    this.total += 1;
  };
  leaveNeutralReview = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    this.total += 1;
  };
  leaveBadReview = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
    this.total += 1;
  };

  render() {
    return (
      <>
        <FlexWrapper key={crypto.randomUUID()}>
          <StyledButton
            key={crypto.randomUUID()}
            onClick={() => {
              this.leaveGoodReview();
            }}
          >
            Good
          </StyledButton>
          <StyledButton
            key={crypto.randomUUID()}
            onClick={() => {
              this.leaveNeutralReview();
            }}
          >
            Neutral
          </StyledButton>
          <StyledButton
            key={crypto.randomUUID()}
            onClick={() => {
              this.leaveBadReview();
            }}
          >
            Bad
          </StyledButton>
        </FlexWrapper>
        <h2>Statistics</h2>
        <div>
          {this.total > 0 ? (
            <StatsInfoList key={crypto.randomUUID()}>
              <StatsInfoItem key={crypto.randomUUID()}>
                Goog: {this.state.good}
              </StatsInfoItem>
              <StatsInfoItem key={crypto.randomUUID()}>
                Neutral: {this.state.neutral}
              </StatsInfoItem>
              <StatsInfoItem key={crypto.randomUUID()}>
                Bad: {this.state.bad}
              </StatsInfoItem>
              <StatsInfoItem key={crypto.randomUUID()}>
                Total: {this.state.good + this.state.neutral + this.state.bad}
              </StatsInfoItem>
              <StatsInfoItem key={crypto.randomUUID()}>
                Positive Feedback:
                {((this.state.good / this.total) * 100).toFixed(0) + '%'}
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
