import { ListItems, Item } from './Statistics.styled';
import { Section } from '../Section';
import { Notification } from '../Notification/Notofication';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {total > 0 && (
        <Section title="Statistics">
          <ListItems>
            <Item>Good: {good}</Item>
            <Item>Neutral: {neutral}</Item>
            <Item>Bad: {bad}</Item>
            <Item>Total: {total}</Item>
            <Item>Positive feedback: {positivePercentage}%</Item>
          </ListItems>
        </Section>
      )}
      {total === 0 && (
        <Section>
          <Notification message="There is no feedback" />
        </Section>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
