import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { FaHeartbeat, FaBrain, FaPlus, FaCut } from 'react-icons/fa';

const theme = {
  primary: '#005792',
  secondary: '#00a8a8',
  textDark: '#2c3e50',
  white: '#ffffff',
  lightBlueBg: '#eaf4ff',
};

const PageContainer = styled.div`
  font-family: 'Roboto', sans-serif;
`;

const HeroBanner = styled.div`
  background-color: ${theme.lightBlueBg};
  padding: 80px 20px 50px;
  text-align: center;
  margin-top: 70px; /* Espacio para el Navbar fijo */
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  color: ${theme.primary};
  font-weight: 700;
  margin: 0;
`;

const SpecialtiesSection = styled.section`
  padding: 60px 20px;
  background-color: ${theme.white};
`;

const SpecialtiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SpecialtyCard = styled(Link)`
  position: relative;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 25px;
  text-decoration: none;
  color: ${theme.white};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CardBackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  transition: transform 0.3s ease;

  ${SpecialtyCard}:hover & {
    transform: scale(1.1);
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 60%);
  z-index: 2;
`;

const CardContent = styled.div`
  position: relative;
  z-index: 3;
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

const specialtiesData = [
  { id: "medicina-interna", title: "Medicina Interna", icon: <FaHeartbeat />, img: "/image/specialty-internal.jpg" },
  { id: "dermatologia", title: "Dermatología", icon: <FaCut />, img: "/image/specialty-dermatology.jpg" },
  { id: "psicologia", title: "Psicología", icon: <FaBrain />, img: "/image/specialty-psychology.jpg" },
  { id: "medicina-integrativa", title: "Medicina Integrativa", icon: <FaPlus />, img: "/image/specialty-integrative.jpg" },
];

function ServiciosPage() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <HeroBanner>
        <HeroTitle>{t('ourServicesTitle', 'Nuestros Servicios')}</HeroTitle>
      </HeroBanner>
      <SpecialtiesSection>
        <SpecialtiesGrid>
          {specialtiesData.map(spec => (
            <SpecialtyCard to={`/especialidades/${spec.id}`} key={spec.id}>
              <CardBackgroundImage src={spec.img} alt={spec.title} />
              <CardOverlay />
              <CardContent>
                <CardIcon>{spec.icon}</CardIcon>
                <CardTitle>{spec.title}</CardTitle>
              </CardContent>
            </SpecialtyCard>
          ))}
        </SpecialtiesGrid>
      </SpecialtiesSection>
    </PageContainer>
  );
}

export default ServiciosPage;