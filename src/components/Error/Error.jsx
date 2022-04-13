/* eslint-disable linebreak-style */
import styled from 'styled-components';
import errorImage from '../../assets/404.svg';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

const Paragraph = styled.p`
  font-weight: bold;
`;

const ImageError = styled.img`
  max-width: 800px;
`;

function Error() {
  return (
    <ErrorContainer>
      <Paragraph>Oups ...</Paragraph>
      <ImageError src={errorImage} alt="Error" />
      <Paragraph>Il semblerait qu'il y ait un problème</Paragraph>
    </ErrorContainer>
  );
}

export default Error;
