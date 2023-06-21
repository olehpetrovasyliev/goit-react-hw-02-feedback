import React, { Component } from 'react';
import { FlexWrapper, StyledButton } from './FeedbackBtns.styled';

export class FeedbackBtns extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  leaveGoodReview = () => {
    this.setState({ good: this.state.good + 1 });
  };
  leaveNeutralReview = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  leaveBadReview = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  render() {
    return (
      <FlexWrapper>
        <StyledButton
          onClick={() => {
            this.leaveGoodReview();
            setTimeout(() => {
              console.log(this.state.good);
            }, 0);
          }}
        >
          Good
        </StyledButton>
        <StyledButton
          onClick={() => {
            this.leaveNeutralReview();
            setTimeout(() => {
              console.log(this.state.neutral);
            }, 0);
          }}
        >
          Neutral
        </StyledButton>
        <StyledButton
          onClick={() => {
            this.leaveBadReview();
            setTimeout(() => {
              console.log(this.state.bad);
            }, 0);
          }}
        >
          Bad
        </StyledButton>
      </FlexWrapper>
    );
  }
}
