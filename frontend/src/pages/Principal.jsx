import styled from "styled-components";
import { Link } from "react-router-dom";

// Paleta de colores consistente
const theme = {
  primary: '#005792',
  secondary: '#00a8a8',
  textDark: '#2c3e50',
  textLight: '#7f8c8d',
  background: '#f8f9fa',
  white: '#ffffff',
};

// --- Estilos Generales ---
const Container = styled.div`
  background-color: ${theme.background};
  font-family: 'Roboto', sans-serif;
`;

const Section = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeading = styled.h2`
  text-align: center;
  font-size: 2.4rem;
  color: ${theme.textDark};
  margin-bottom: 60px;
  font-weight: 600;
`;

// --- Estilos del Hero Banner ---
const BannerWrapper = styled.div`
  width: 100%;
  height: 450px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 1;
`;

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 41, 71, 0.5);
  z-index: 2;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  color: ${theme.white};
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  text-shadow: 0 2px 5px rgba(0,0,0,0.5);
`;

const SubText = styled.p`
  font-size: 1.4rem;
  max-width: 700px;
  margin: 0 auto 40px;
  text-shadow: 0 1px 3px rgba(0,0,0,0.5);
  font-weight: 300;
`;

const CTAButton = styled(Link)`
  background-color: ${theme.secondary};
  color: white;
  padding: 15px 35px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #007c7c;
    transform: translateY(-3px);
  }
`;

// --- Estilos de la Sección de Servicios ---
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
`;

const ServiceCard = styled.div`
  background: ${theme.white};
  border-radius: 10px;
  border-top: 4px solid ${theme.secondary};
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.07);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0,0,0,0.1);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${theme.primary};
  margin-bottom: 10px;
`;

const ServiceText = styled.p`
  font-size: 1rem;
  color: ${theme.textLight};
  line-height: 1.6;
`;

const servicesData = [
    { title: "Profesionales Certificados", text: "Consulta en línea con un equipo de expertos validados internacionalmente." },
    { title: "Psiquiatría y Psicología", text: "Combinamos enfoques científicos para un tratamiento integral y efectivo." },
    { title: "Bilingüe e Internacional", text: "Atención en tu idioma, sin barreras culturales, estés donde estés." },
    { title: "Enfoque Humano", text: "Un espacio seguro, confidencial e integrativo diseñado para tu bienestar." }
];

function Inicio() {
  return (
    <Container>
      <BannerWrapper>
        <BannerImage src="/image/banner.jpg" alt="Salud mental" />
        <BannerOverlay />
        <HeroContent>
            <Heading>Salud mental sin fronteras</Heading>
            <SubText>En inglés o español. Donde estés, cuando lo necesites.</SubText>
            <CTAButton to="/especialidades">Agendar cita</CTAButton>
        </HeroContent>
      </BannerWrapper>

      <Section>
        <SectionHeading>Un Cuidado Diseñado para Ti</SectionHeading>
        <ServicesGrid>
            {servicesData.map((service, index) => (
                <ServiceCard key={index}>
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <ServiceText>{service.text}</ServiceText>
                </ServiceCard>
            ))}
        </ServicesGrid>
      </Section>
    </Container>
  );
}

export default Inicio;