import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { doctorsData } from '../locales/doctors';

const theme = {
  primary: '#2E7D32',
  secondary: '#1E88E5',
  textDark: '#37474F',
  background: '#F5F5F5',
  white: '#ffffff',
  lightGreenBg: '#E8F5E9',
};

const PageContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  margin-top: 70px;
  background-color: ${theme.background};
`;

const HeroBanner = styled.div`
  background-color: ${theme.lightGreenBg};
  padding: 50px 20px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  color: ${theme.primary};
  font-weight: 700;
  margin: 0;
`;

const SpecialtySection = styled.section`
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SpecialtyTitle = styled.h2`
  font-size: 2.2rem;
  color: ${theme.textDark};
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 2px solid ${theme.primary};
`;

const DoctorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const DoctorCard = styled(Link)`
  background: ${theme.white};
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.07);
  text-align: center;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0,0,0,0.12);
  }
`;

const DoctorImageWrapper = styled.div`
  width: 100%;
  height: 300px; /* mismo alto fijo */
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const DoctorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  background-color: #f0f0f0;
`;


const DoctorInfo = styled.div`
  padding: 20px;
`;

const DoctorName = styled.h3`
  margin: 0 0 5px;
  font-size: 1.3rem;
  color: ${theme.textDark};
`;

const DoctorSpecialty = styled.p`
  margin: 0;
  color: ${theme.secondary};
  font-weight: 500;
`;

function EquipoPage() {
  const { t } = useTranslation();

  const doctorsBySpecialty = doctorsData.reduce((acc, doctor) => {
    (acc[doctor.specialty] = acc[doctor.specialty] || []).push(doctor);
    return acc;
  }, {});

  return (
    <PageContainer>
      <HeroBanner>
        <HeroTitle>{t('meetOurTeam', 'Conoce a Nuestro Equipo')}</HeroTitle>
      </HeroBanner>

      {Object.keys(doctorsBySpecialty).map(specialty => (
        <SpecialtySection key={specialty}>
          <SpecialtyTitle>{specialty}</SpecialtyTitle>
          <DoctorsGrid>
            {doctorsBySpecialty[specialty].map(doctor => (
              <DoctorCard to={`/equipo/${doctor.id}`} key={doctor.id}>
              <DoctorImageWrapper>
                <DoctorImage src={doctor.img} alt={doctor.name} />
              </DoctorImageWrapper>
                
                <DoctorInfo>
                  <DoctorName>{doctor.name}</DoctorName>
                  <DoctorSpecialty>{doctor.specialty}</DoctorSpecialty>
                </DoctorInfo>
              </DoctorCard>
            ))}
          </DoctorsGrid>
        </SpecialtySection>
      ))}
    </PageContainer>
  );
}

export default EquipoPage;
