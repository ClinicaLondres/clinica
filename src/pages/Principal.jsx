import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: calc(100vh - 150px); 
  padding: 60px 20px 20px;
  text-align: center;
  background-color: #f5f8fa;
  font-family: 'Roboto', sans-serif;
`;


const Heading = styled.h1`
  font-size: 2.8rem;
  color: #003366;
  margin-bottom: 15px;
`;

const SubText = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto 30px;
`;

const CTAButton = styled(Link)`
  background-color: #007bff;
  color: white;
  padding: 12px 28px;
  border-radius: 5px;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Image = styled.img`
  margin-bottom: 40px;
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;


const ServicesSection = styled.section`
  margin-top: 40px;
  margin-bottom: 0; /* Eliminamos espacio extra antes del footer */
  background-color: #ffffff;
  padding: 40px 20px;
  border-radius: 8px;
`;

const ServiceList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0;
  margin: 0 auto;
  max-width: 600px;
`;

const ServiceItem = styled.li`
  font-size: 1rem;
  color: #444;
  text-align: left;
`;

const BannerWrapper = styled.div`
  width: 100%;
  height: 350px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const BannerImage = styled.img`
  width: 100%;R
  height: 100%;
  object-fit: cover;
`;


function Inicio() {
  return (
    <Container>
      <BannerWrapper>
        <BannerImage src="/image/banner.jpg" alt="Atención psicológica online" />
      </BannerWrapper>

      <Heading>Salud mental sin fronteras</Heading>
      <SubText>En inglés o español. Donde estés, cuando lo necesites.</SubText>
      <CTAButton to="/especialidades">Agendar cita</CTAButton>

      <ServicesSection>
        <h2>Servicios destacados</h2>
        <ServiceList>
          <ServiceItem>✅ Consulta en línea con profesionales certificados</ServiceItem>
          <ServiceItem>✅ Atención en psiquiatría y psicología</ServiceItem>
          <ServiceItem>✅ Idiomas: español e inglés</ServiceItem>
          <ServiceItem>✅ Enfoque humano, profesional e integrativo</ServiceItem>
        </ServiceList>
      </ServicesSection>
    </Container>
  );
}


export default Inicio;
