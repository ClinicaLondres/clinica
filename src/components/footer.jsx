import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  background-color: #003366;
  color: white;
  padding: 40px 20px;
  margin-top: 0;
`;



const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrado en mobile */
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
  }
`;


const Column = styled.div`
  flex: 1;
`;

const Title = styled.h4`
  margin-bottom: 10px;
  font-weight: bold;
`;

const FooterLink = styled(Link)`
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.p`
  margin-top: 30px;
  font-size: 0.9rem;
  color: #ccc;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <Title>Clínica Online</Title>
          <p>Tu salud mental, donde estés.</p>
        </Column>
        <Column>
          <Title>Enlaces útiles</Title>
          <FooterLink to="/">Inicio</FooterLink>
          <FooterLink to="/about">Nosotros</FooterLink>
          <FooterLink to="/contact">Contacto</FooterLink>
        </Column>
        <Column>
          <Title>Contacto</Title>
          <p>Email: prueba@gmail.com</p>
          <p>Teléfono: 11111</p>
        </Column>
      </FooterContent>

      <Copyright>
        &copy; {new Date().getFullYear()} Clínica Online. Todos los derechos reservados.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
