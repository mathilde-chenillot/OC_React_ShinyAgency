/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultPicture from '../../assets/profile.png';
import colors from '../../utils/style/color';
import { useTheme } from '../../utils/hooks/useTheme';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
  background-color: ${({ theme }) => (theme === 'light' ? colors.backgroundLight : '#565389')};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

const CardLabel = styled.span`
    color: ${({ theme }) => (theme === 'light' ? '#5843e4' : '#fbd95e')};
    font-size: 22px;
    font-weight: bold;
`;

const CardName = styled.span`
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#fcecb0')}
`;

const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`;

function Card({ label, picture, title }) {
  const { theme } = useTheme();
  return (
    <CardWrapper theme={theme}>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardName theme={theme}>{title}</CardName>
    </CardWrapper>
  );
}

Card.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  picture: PropTypes.string,
};

Card.defaultProps = {
  title: '',
  label: '',
  picture: defaultPicture,
};

export default Card;
