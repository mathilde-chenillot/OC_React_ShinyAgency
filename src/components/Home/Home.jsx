import { Link } from 'react-router-dom';
// styled component
import styled from 'styled-components';
import colors from '../../utils/style/color';
import homeIllustration from '../../assets/home-illustration.svg';

const MainStyled = styled.main`
  display: flex;
  justify-content: center;
`;

const HomeContainer = styled.div`
  display: flex;
  margin: 30px;
  padding: 60px 90px;
  background-color: ${colors.backgroundLight};
  max-width: 1200px;
`;

const StyledLink = styled(Link)`
  padding: 15px;
  text-decoration: none;
  font-size: 18px;
  color: white;
  border-radius: 30px;
  background-color: ${colors.primary};
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  jutify-content: center;
  flex: 1;
`;

const Title = styled.h1`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
`;

const Illustration = styled.img`
  flex: 1;
`;

function Home() {
  return (
    <MainStyled>
      <HomeContainer>
        <LeftColumn>
          <Title>
            Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents
          </Title>
          <StyledLink to="/survey/1">Faire le test</StyledLink>
        </LeftColumn>
        <Illustration src={homeIllustration} alt="Home illustration" />
      </HomeContainer>
    </MainStyled>
  );
}

export default Home;
