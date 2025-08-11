import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const theme = {
  primary: '#2E7D32',
  secondary: '#1E88E5',
  textDark: '#37474F',
  white: '#ffffff',
};

const AvailabilityContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 20px;

  .react-calendar {
    border-radius: 10px;
    border: 1px solid #ddd;
    width: 350px;
  }

  .react-calendar__tile--hasActive {
    background: #e8f5e9;
  }

  .react-calendar__tile--active {
    background: ${theme.primary} !important;
    color: ${theme.white} !important;
  }
`;

const TimeSlotsContainer = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const TimeSlotsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 10px;
  margin-top: 10px;
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

const NoSlotsMessage = styled.p`
  color: #999;
  font-style: italic;
`;

function DoctorAvailability({ availability, doctorName }) {
  const [date, setDate] = useState(new Date());

  const formatDate = (d) => d.toISOString().split('T')[0];

  const availableSlotsForDate = availability[formatDate(date)] || [];

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dateString = formatDate(date);
      if (availability[dateString] && availability[dateString].length > 0) {
        return <div style={{ height: '8px', width: '8px', backgroundColor: theme.primary, borderRadius: '50%', margin: '0 auto' }}></div>;
      }
    }
    return null;
  };

  return (
    <AvailabilityContainer>
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={tileContent}
        minDate={new Date()}
      />
      <TimeSlotsContainer>
        <h4>Horarios para {date.toLocaleDateString()}</h4>
        {availableSlotsForDate.length > 0 ? (
          <TimeSlotsGrid>
            {availableSlotsForDate.map(time => (
              <TimeSlotButton key={time} onClick={() => alert(`Cita agendada con ${doctorName} el ${date.toLocaleDateString()} a las ${time}`)}>
                {time}
              </TimeSlotButton>
            ))}
          </TimeSlotsGrid>
        ) : (
          <NoSlotsMessage>No hay turnos disponibles para este día.</NoSlotsMessage>
        )}
      </TimeSlotsContainer>
    </AvailabilityContainer>
  );
}

export default DoctorAvailability;
