import styled from 'styled-components';

export const Button = styled.button`
  font-size: 13px;
  font-weight: 700;
  padding: 3px 6px;
  width: 70px;
  border: none;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.6);
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  :hover,
  :focus {
    background: #fff;
  }
`;

export const OptionList = styled.ul`
  display: flex;
  padding: 10px 80px 0px;
  justify-content: space-evenly;
`;

export const ListItem = styled.li`
  list-style: none;
  margin: 5px;
`;
