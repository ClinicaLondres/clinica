import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "/image/logo.png";

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #002244, #003366);
  color: white;
  padding: 50px 20px 20px;
  border-top: 4px solid #0066cc;
  font-family: 'Arial', sans-serif;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 250px;
`;

const Title = styled.h4`
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 1.2rem;
  color: #ffffff;
  border-bottom: 2px solid #0066cc;
  padding-bottom: 6px;
`;

const FooterLink = styled(Link)`
  display: block;
  color: #ccc;
  text-decoration: none;
  margin-bottom: 8px;
  font-size: 0.95rem;
  transition: color 0.3s;

  &:hover {
    color: #ffffff;
  }
`;

const ContactItem = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  color: #ccc;
  margin-bottom: 6px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;

  a {
    color: #ccc;
    font-size: 1.2rem;
    transition: color 0.3s;

    &:hover {
      color: #ffffff;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 15px;
  border-top: 1px solid rgba(255,255,255,0.2);
  font-size: 0.85rem;
  color: #aaa;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center; /* Alinea logo y título al centro verticalmente */
  gap: 12px;
  margin-top: -25px;
`;

const Logo = styled.img`
  width: 80px;
  height: auto;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.1);
  padding: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
`;
const LogoTitle = styled.h4`
  font-weight: 600;
  font-size: 1.2rem;
  color: #ffffff;
  border-bottom: 2px solid #0066cc;
  padding-bottom: 4px;
   margin: -5px 0 0 0;
`;

const MiniInfo = styled.p`
  margin-top: 8px;
  font-size: 1rem;
  font-style: italic;
  color: #b0c4de;
  line-height: 1.4;
  max-width: 220px;
  border-left: 3px solid #0066cc;
  padding-left: 10px;
`;


function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <LogoContainer>
            <Logo src={logo} alt="Clínica Online Logo" />
            <LogoTitle>Clínica Online</LogoTitle>
            </LogoContainer>
          <MiniInfo>Tu salud mental, donde estés.</MiniInfo>
        </Column>

        <Column>
          <Title>Enlaces útiles</Title>
          <FooterLink to="/">Inicio</FooterLink>
          <FooterLink to="/about">Nosotros</FooterLink>
          <FooterLink to="/contact">Contacto</FooterLink>
        </Column>

        <Column>
          <Title>Contacto</Title>
          <ContactItem><FaEnvelope /> contacto@clinica.com</ContactItem>
          <ContactItem><FaPhoneAlt /> +44 20 7946 0000</ContactItem>

          <SocialIcons>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </SocialIcons>
        </Column>
      </FooterContent>

      <Copyright>
        &copy; {new Date().getFullYear()} Clínica Online. 
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
