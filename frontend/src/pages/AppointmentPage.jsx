import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { doctorsData } from '../locales/doctors';

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
  margin-top: 70px;
  background-color: ${theme.background};
  min-height: 100vh;
`;

const FilterSection = styled.div`
  background-color: ${theme.white};
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

const FilterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #ddd;
  background-color: ${props => props.active ? theme.primary : theme.white};
  color: ${props => props.active ? theme.white : theme.textDark};
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${theme.primary};
  }
`;

const DoctorsListContainer = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const DoctorCard = styled.div`
  background: ${theme.white};
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.07);
  margin-bottom: 30px;
  display: flex;
  overflow: hidden;
`;

const DoctorInfo = styled.div`
  padding: 25px;
  display: flex;
  align-items: center;
  gap: 20px;
  width: 40%;
  min-width: 300px;
`;

const DoctorImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

const DoctorDetails = styled.div``;

const DoctorName = styled.h2`
  margin: 0 0 5px;
  font-size: 1.4rem;
  color: ${theme.textDark};
`;

const DoctorSpecialty = styled.p`
  margin: 0;
  color: ${theme.textLight};
  font-size: 1rem;
`;

const AvailabilitySection = styled.div`
  background-color: ${theme.lightGreenBg};
  width: 60%;
  padding: 25px;
  display: flex;
  gap: 15px;
  overflow-x: auto;
`;

const DayColumn = styled.div`
  text-align: center;
  min-width: 80px;
`;

const DayHeader = styled.div`
  font-weight: 600;
  color: ${theme.textDark};
  margin-bottom: 10px;
`;

const TimeSlots = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TimeSlotButton = styled.button`
  padding: 8px 12px;
  background-color: ${theme.secondary};
  color: ${theme.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1565C0;
  }
`;

function AppointmentPage() {
  const { t, i18n } = useTranslation();
  const [doctors, setDoctors] = useState(doctorsData);
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [scheduleDays, setScheduleDays] = useState([]);

  const specialties = ['Todos', ...new Set(doctors.map(doc => doc.specialty))];

  useEffect(() => {
    const today = new Date();
    const days = [];
    for (let i = 0; i < 4; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push(date);
    }
    setScheduleDays(days);
  }, []);

  useEffect(() => {
    if (activeFilter === 'Todos') {
      setFilteredDoctors(doctors);
    } else {
      setFilteredDoctors(doctors.filter(doc => doc.specialty === activeFilter));
    }
  }, [activeFilter, doctors]);

  const formatDate = (date) => date.toISOString().split('T')[0];
  
  const getDayName = (date, index) => {
    if (index === 0) return t('today', 'Hoy');
    if (index === 1) return t('tomorrow', 'Mañana');
    return date.toLocaleDateString(i18n.language, { weekday: 'short' });
  };

  return (
    <PageContainer>
      <FilterSection>
        <FilterContainer>
          {specialties.map(specialty => (
            <FilterButton
              key={specialty}
              active={activeFilter === specialty}
              onClick={() => setActiveFilter(specialty)}
            >
              {specialty}
            </FilterButton>
          ))}
        </FilterContainer>
      </FilterSection>

      <DoctorsListContainer>
        {filteredDoctors.map(doctor => (
          <DoctorCard key={doctor.id}>
            <DoctorInfo>
              <DoctorImage src={doctor.img} alt={doctor.name} />
              <DoctorDetails>
                <DoctorName>{doctor.name}</DoctorName>
                <DoctorSpecialty>{doctor.specialty}</DoctorSpecialty>
              </DoctorDetails>
            </DoctorInfo>
            <AvailabilitySection>
              {scheduleDays.map((day, index) => (
                <DayColumn key={formatDate(day)}>
                  <DayHeader>{getDayName(day, index)}</DayHeader>
                  <TimeSlots>
                    {doctor.availability[formatDate(day)] ? (
                      doctor.availability[formatDate(day)].map(time => (
                        <TimeSlotButton key={time} onClick={() => alert(`Cita agendada con ${doctor.name} el ${day.toLocaleDateString()} a las ${time}`)}>
                          {time}
                        </TimeSlotButton>
                      ))
                    ) : (
                      <span>-</span>
                    )}
                  </TimeSlots>
                </DayColumn>
              ))}
            </AvailabilitySection>
          </DoctorCard>
        ))}
      </DoctorsListContainer>
    </PageContainer>
  );
}

export default AppointmentPage;
