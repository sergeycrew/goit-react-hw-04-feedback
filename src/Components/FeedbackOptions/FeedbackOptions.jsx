import { Button, OptionList, ListItem } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, OnLeaveFeedback }) => {
  return (
    <OptionList>
      {options.map(option => (
        <ListItem key={option}>
          <Button
            type="button"
            id={option}
            name={option}
            onClick={OnLeaveFeedback}
          >
            {option}
          </Button>
        </ListItem>
      ))}
    </OptionList>
  );
};

FeedbackOptions.propTypes = {
  OnLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOf(['good', 'neutral', 'bad']).isRequired
  ),
};
