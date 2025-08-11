import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Nav = styled.nav`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 15px 30px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
`;

const LogoImg = styled.img`
  height: 40px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li``;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #003366;
  font-weight: 500;
  font-size: 1rem;
  padding: 5px 0;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    color: #007bff;
    border-bottom-color: #007bff;
  }
`;

const LanguageSwitcher = styled.div`
  width: 100px;
  display: flex;
  justify-content: flex-end;
`;

const LanguageSelect = styled.select`
  background: transparent;
  border: 1px solid #ddd;
  padding: 6px 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  color: #003366;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-right: 30px;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23003366%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat;
  background-position: right 10px top 50%;
  background-size: .65em auto;
`;


function Navbar() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
  };

  return (
    <Nav>
      <NavContainer>
        <Link to="/">
          <LogoImg src="/image/logo.png" alt="Logo Clínica" />
        </Link>

        <NavList>
          <NavItem><StyledLink to="/">{t('navHome', 'Home')}</StyledLink></NavItem>
          <NavItem><StyledLink to="/about">{t('navAbout', 'About')}</StyledLink></NavItem>
          <NavItem><StyledLink to="/especialidades">{t('navServices', 'Services')}</StyledLink></NavItem>
          <NavItem><StyledLink to="/blog">{t('navBlog', 'Blog')}</StyledLink></NavItem>
          <NavItem><StyledLink to="/contacto">{t('navContact', 'Contact')}</StyledLink></NavItem>
        </NavList>

        <LanguageSwitcher>  
          
          <LanguageSelect 
            value={i18n.language.startsWith('es') ? 'es' : 'en'} 
            onChange={handleLanguageChange}
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </LanguageSelect>
        </LanguageSwitcher>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;