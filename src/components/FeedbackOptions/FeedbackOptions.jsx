import {
  FeedbacOptionsButton,
  FeedbacOptionsLi,
  FeedbacOptionsUl,
} from './feedbackOptions.styled';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <>
      <FeedbacOptionsUl>
        <FeedbacOptionsLi key="good">
          <FeedbacOptionsButton
            type="button"
            onClick={() => {
              onLeaveFeedback('good');
            }}
          >
            Good
          </FeedbacOptionsButton>
        </FeedbacOptionsLi>
        <FeedbacOptionsLi key="neutral">
          <FeedbacOptionsButton
            type="button"
            onClick={() => {
              onLeaveFeedback('neutral');
            }}
          >
            Neutral
          </FeedbacOptionsButton>
        </FeedbacOptionsLi>
        <FeedbacOptionsLi key="bad">
          <FeedbacOptionsButton
            type="button"
            onClick={() => {
              onLeaveFeedback('bad');
            }}
          >
            Bad
          </FeedbacOptionsButton>
        </FeedbacOptionsLi>
      </FeedbacOptionsUl>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
