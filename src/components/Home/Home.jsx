import styled from 'styled-components';
// styled component
import colors from '../../utils/style/color';
import homeIllustration from '../../assets/home-illustration.svg';
import { StyledLink } from '../../utils/style/StyledLink';

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
