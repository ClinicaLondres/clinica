DoctorProfilePage.jsx




import React from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { doctorsData } from '../locales/doctors';

const theme = {
  primary: '#2E7D32',
  secondary: '#1E88E5',
  textDark: '#37474F',
  textLight: '#607D8B',
  background: '#F5F5F5',
  white: '#ffffff',
};

const PageContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  margin-top: 70px;
  background-color: ${theme.background};
  padding: 40px 20px;
`;

const ProfileLayout = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background: ${theme.white};
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  display: flex;
  overflow: hidden;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
`;

const ProfileContent = styled.div`
  padding: 40px;
`;

const DoctorName = styled.h1`
  font-size: 2.5rem;
  color: ${theme.textDark};
  margin: 0 0 5px;
`;

const DoctorSpecialty = styled.h2`
  font-size: 1.5rem;
  color: ${theme.primary};
  font-weight: 400;
  margin: 0 0 30px;
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  color: ${theme.textDark};
  margin-top: 30px;
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom: 2px solid ${theme.secondary};
`;

const Bio = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${theme.textLight};
`;

const TreatmentsList = styled.ul`
  list-style-type: '✓';
  padding-left: 20px;
  
  li {
    margin-bottom: 10px;
    padding-left: 10px;
    font-size: 1.1rem;
  }
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
  margin-top: 30px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #1565C0;
    transform: translateY(-3px);
  }
`;

function DoctorProfilePage() {
  const { t } = useTranslation();
  const { doctorId } = useParams();
  const doctor = doctorsData.find(doc => doc.id === parseInt(doctorId));

  if (!doctor) {
    return <div>{t('doctorNotFound', 'Doctor no encontrado')}</div>;
  }

  return (
    <PageContainer>
      <ProfileLayout>
        <ProfileImage src={doctor.img} alt={doctor.name} />
        <ProfileContent>
          <DoctorName>{doctor.name}</DoctorName>
          <DoctorSpecialty>{doctor.specialty}</DoctorSpecialty>
          
          <SectionTitle>{t('aboutMe', 'Sobre mí')}</SectionTitle>
          <Bio>{doctor.bio}</Bio>

          {doctor.treatments && (
            <>
              <SectionTitle>{t('specialTreatments', 'Tratamientos Destacados')}</SectionTitle>
              <TreatmentsList>
                {doctor.treatments.map(treatment => <li key={treatment}>{treatment}</li>)}
              </TreatmentsList>
            </>
          )}

          <CTAButton to="/citas">{t('bookAppointmentWith', `Agendar cita con ${doctor.name.split(' ')[0]}`)}</CTAButton>
        </ProfileContent>
      </ProfileLayout>
    </PageContainer>
  );
}

export default DoctorProfilePage;
