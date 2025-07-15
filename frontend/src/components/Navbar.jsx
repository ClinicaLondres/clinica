import styled from "styled-components";
import { Link } from "react-router-dom";


const Nav = styled.nav`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 15px 30px;
`;


const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const Spacer = styled.div`
  width: 100px; /* mismo ancho que el logo para balancear */
`;

const LogoImg = styled.img`
  height: 40px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li``;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #003366;
  font-weight: 500;

  &:hover {
    color: #007bff;
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <Link to="/">
          <LogoImg src="/image/logo.png" alt="Logo Clínica" />
        </Link>

        <NavList>
          <NavItem><StyledLink to="/">Home</StyledLink></NavItem>
          <NavItem><StyledLink to="/about">About</StyledLink></NavItem>
          <NavItem><StyledLink to="/services">Services</StyledLink></NavItem>
          <NavItem><StyledLink to="/contact">Contact</StyledLink></NavItem>
        </NavList>

        <Spacer /> 
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
