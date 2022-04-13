/* eslint-disable linebreak-style */
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/color';
import darkLogo from '../../assets/dark-logo.png';

// Logo styles
const Logo = styled.img`
  height: 40px;
`;

// Nav styles
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

// NavLink styles
const StyledNavLink = styled(NavLink)`
  padding: 15px;
  color: ${colors.secondary};
  text-decoration: none;
  font-size: 18px;
  ${(props) => props.$isFullLink
    && `color: white;
      border-radius: 30px;
      background-color: ${colors.primary};
      `
}
`;

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <Logo src={darkLogo} alt="Shiny Agence's logo" />
      </Link>

      <div>
        <StyledNavLink to="/">Accueil</StyledNavLink>
        <StyledNavLink to="freelances">Profils</StyledNavLink>
        <StyledNavLink to="survey/1" $isFullLink>Faire le test</StyledNavLink>
      </div>
    </NavContainer>
  );
}

export default Header;
