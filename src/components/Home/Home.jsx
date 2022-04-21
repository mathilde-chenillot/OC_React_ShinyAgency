import styled from 'styled-components';
// styled component
import colors from '../../utils/style/color';
import homeIllustration from '../../assets/home-illustration.svg';
import { StyledLink } from '../../utils/style/StyledLink';
import { useTheme } from '../../utils/hooks/useTheme';

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HomeContainer = styled.div`
  margin: 30px;
  background-color: ${({ theme }) => (theme === 'light' ? colors.backgroundLight : colors.backgroundDark)};
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`;

const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`;

const Illustration = styled.img`
  flex: 1;
`;

function Home() {
  const { theme } = useTheme();

  return (
    <HomeWrapper>
      <HomeContainer theme={theme}>
        <LeftColumn>
          <StyledTitle theme={theme}>
            Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents
          </StyledTitle>
          <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
        </LeftColumn>
        <Illustration src={homeIllustration} alt="Home illustration" />
      </HomeContainer>
    </HomeWrapper>
  );
}

export default Home;
