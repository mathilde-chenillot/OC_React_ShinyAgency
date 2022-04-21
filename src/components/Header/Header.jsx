/* eslint-disable linebreak-style */
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../../utils/hooks/useTheme';
import darkLogo from '../../assets/dark-logo.png';
import lightLogo from '../../assets/light-logo.png';
import { StyledLink } from '../../utils/style/StyledLink';

const Logo = styled.img`
  height: 70px;
`;

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  const { theme } = useTheme();

  return (
    <NavContainer>
      <Link to="/">
        <Logo src={theme === 'light' ? darkLogo : lightLogo} alt="Shiny Agence's logo" />
      </Link>

      <div>
        <StyledLink $theme={theme} to="/">Accueil</StyledLink>
        <StyledLink $theme={theme} to="freelances">Profils</StyledLink>
        <StyledLink to="survey/1" $isFullLink>Faire le test</StyledLink>
      </div>
    </NavContainer>
  );
}

export default Header;
