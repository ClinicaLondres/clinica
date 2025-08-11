import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const theme = {
  primary: '#2E7D32',
  secondary: '#1E88E5',
  textDark: '#37474F',
  textLight: '#607D8B',
  background: '#F5F5F5',
  white: '#ffffff',
  lightGreenBg: '#E8F5E9',
};

const PageContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  color: ${theme.textDark};
  margin-top: 70px;
`;

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.lightGreenBg};
`;

const HeroImage = styled.img`
  width: 50%;
  height: 450px;
  object-fit: cover;
`;

const HeroContent = styled.div`
  width: 50%;
  padding: 50px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  color: ${theme.primary};
  margin-bottom: 20px;
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  color: ${theme.textLight};
  line-height: 1.7;
  margin-bottom: 30px;
`;

const CTAButton = styled(Link)`
  background-color: ${theme.secondary};
  color: white;
  padding: 15px 35px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #1565C0;
    transform: translateY(-3px);
  }
`;

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
`;

const MainContent = styled.div``;

const Sidebar = styled.aside`
  background-color: ${theme.white};
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.07);
  height: fit-content;

  ${CTAButton} {
    margin-top: 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: ${theme.primary};
  margin-bottom: 25px;
`;

const StyledList = styled.ul`
  list-style-type: '✓';
  padding-left: 25px;
  font-size: 1.1rem;
  
  li {
    margin-bottom: 15px;
    padding-left: 10px;
    color: ${theme.textDark};
    line-height: 1.6;
  }
`;

const allSpecialtiesData = {
  "psicologia": {
    heroImage: "/image/psychology-hero.jpg",
    title: "Psicología",
    description: "Brindamos apoyo psicológico y psicoterapia integral, utilizando métodos validados para ayudarte a alcanzar el bienestar emocional.",
    helpsWith: [
      "Manejo de la ansiedad y el estrés",
      "Tratamiento de la depresión",
      "Terapia de pareja y familiar",
      "Desarrollo de la autoestima",
      "Superación de traumas y fobias"
    ],
  },
  "dermatologia": {
    heroImage: "/image/dermatology-hero.jpg",
    title: "Dermatología",
    description: "Ofrecemos diagnóstico y tratamiento para una amplia gama de condiciones de la piel, cabello y uñas, con un enfoque en la salud y la estética.",
    helpsWith: [
      "Tratamiento del acné",
      "Detección y manejo de cáncer de piel",
      "Manejo de eczema y psoriasis",
      "Dermatología cosmética",
      "Tratamientos láser"
    ],
  },
  "medicina-interna": {
    heroImage: "/image/internal-hero.jpg",
    title: "Medicina Interna",
    description: "Nuestros internistas se especializan en el diagnóstico y manejo de enfermedades complejas en adultos, promoviendo la prevención y el bienestar general.",
    helpsWith: [
      "Chequeos generales y preventivos",
      "Control de enfermedades crónicas",
      "Manejo de la hipertensión y diabetes",
      "Diagnóstico de síntomas complejos",
      "Salud del adulto"
    ],
  },
  "medicina-integrativa": {
    heroImage: "/image/integrative-hero.jpg",
    title: "Medicina Integrativa",
    description: "Combinamos la medicina convencional con terapias complementarias basadas en evidencia para tratar a la persona de manera integral: mente, cuerpo y espíritu.",
    helpsWith: [
      "Manejo del dolor crónico",
      "Reducción del estrés y la fatiga",
      "Planes de nutrición funcional",
      "Terapias de mente-cuerpo",
      "Optimización del bienestar general"
    ],
  }
};

function EspecialidadDetalle() {
  const { t } = useTranslation();
  const { especialidadId } = useParams();
  
  const specialty = allSpecialtiesData[especialidadId];

  if (!specialty) {
    return <div>{t('serviceNotFound', 'Servicio no encontrado')}</div>;
  }

  return (
    <PageContainer>
      <HeroSection>
        <HeroImage src={specialty.heroImage} alt={specialty.title} />
        <HeroContent>
          <HeroTitle>{specialty.title}</HeroTitle>
          <HeroDescription>{specialty.description}</HeroDescription>
          <CTAButton to="/especialidades">{t('bookAppointment', 'Agendar Cita')}</CTAButton>
        </HeroContent>
      </HeroSection>

      <ContentLayout>
        <MainContent>
          <SectionTitle>{t('weCanHelpWith', 'Podemos ayudarte con:')}</SectionTitle>
          <StyledList>
            {specialty.helpsWith.map(item => <li key={item}>{item}</li>)}
          </StyledList>
        </MainContent>
        <Sidebar>
          <SectionTitle>{t('ourProfessionals', 'Nuestros Profesionales')}</SectionTitle>
          <p>{t('seeTeam', 'Visita nuestra página de equipo para conocer a los especialistas en esta área.')}</p>
          <CTAButton to="/equipo">{t('meetTheTeam', 'Conocer al Equipo')}</CTAButton>
        </Sidebar>
      </ContentLayout>
    </PageContainer>
  );
}

export default EspecialidadDetalle;