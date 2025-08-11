import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { FaCalendarAlt, FaUsers, FaStethoscope, FaMapMarkerAlt, FaHeartbeat, FaBrain, FaPlus, FaCut } from 'react-icons/fa';

const theme = {
  primary: '#005792',
  secondary: '#00a8a8',
  textDark: '#2c3e50',
  textLight: '#7f8c8d',
  background: '#f8f9fa',
  white: '#ffffff',
};

const Container = styled.div`
  background-color: ${theme.background};
  font-family: 'Roboto', sans-serif;
`;

const BannerWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
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

const IconNavWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
  position: relative;
  z-index: 3;
  flex-wrap: wrap;
`;

const IconNavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.white};
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  width: 150px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid ${theme.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  font-size: 2.5rem;
  color: ${theme.secondary};
`;

const LanguageSwitcher = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 10;

    button {
        background: transparent;
        border: 1px solid white;
        color: white;
        padding: 5px 10px;
        margin-left: 5px;
        cursor: pointer;
        border-radius: 3px;
        font-weight: 600;

        &.active {
            background: white;
            color: ${theme.primary};
        }
    }
`;

const SpecialtiesSection = styled.section`
  padding: 80px 20px;
  background-color: ${theme.white};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.4rem;
  color: ${theme.textDark};
  margin-bottom: 50px;
  font-weight: 600;
`;

const SpecialtiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 30px;
  max-width: 800px; 
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


function Inicio() {
  const { t, i18n } = useTranslation();

  const navLinks = [
    { text: t('navAppointment'), to: "/appointment", icon: <FaCalendarAlt /> },
    { text: t('navTeam'), to: "/equipo", icon: <FaUsers /> },
    { text: t('navServices'), to: "/especialidades", icon: <FaStethoscope /> },
    { text: t('navContact'), to: "/contacto", icon: <FaMapMarkerAlt /> }
  ];

  const specialtiesData = [
    { title: "Medicina Interna", icon: <FaHeartbeat />, img: "/image/specialty-internal.jpg", to: "/especialidades/medicina-interna" },
    { title: "Dermatología", icon: <FaCut />, img: "/image/specialty-dermatology.jpg", to: "/especialidades/dermatologia" },
    { title: "Psicología", icon: <FaBrain />, img: "/image/specialty-psychology.jpg", to: "/especialidades/psicologia" },
    { title: "Medicina Integrativa", icon: <FaPlus />, img: "/image/specialty-integrative.jpg", to: "/especialidades/medicina-integrativa" },
  ];

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <Container>
      <LanguageSwitcher>
        <button 
          onClick={() => changeLanguage('es')}
          className={i18n.language === 'es' ? 'active' : ''}
        >
          ES
        </button>
        <button 
          onClick={() => changeLanguage('en')}
          className={i18n.language === 'en' ? 'active' : ''}
        >
          EN
        </button>
      </LanguageSwitcher>
      
      <BannerWrapper>
        <BannerImage src="/image/banner.jpg" alt="Salud mental" />
        <BannerOverlay />
        <HeroContent>
          <Heading>{t('heroTitle')}</Heading>
          <SubText>{t('heroSubtitle')}</SubText>
        </HeroContent>

        <IconNavWrapper>
          {navLinks.map(link => (
            <IconNavLink to={link.to} key={link.text}>
              <IconCircle>{link.icon}</IconCircle>
              <span>{link.text}</span>
            </IconNavLink>
          ))}
        </IconNavWrapper>
      </BannerWrapper>

      <SpecialtiesSection>
        <SectionTitle>{t('ourSpecialtiesTitle', 'Nuestras Especialidades')}</SectionTitle>
        <SpecialtiesGrid>
          {specialtiesData.map(spec => (
            <SpecialtyCard to={spec.to} key={spec.title}>
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
      
    </Container>
  );
}

export default Inicio;