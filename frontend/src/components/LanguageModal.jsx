import React from 'react';
import styled from 'styled-components';

// Estilos del Modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  width: 90%;
  max-width: 400px;
`;

const ModalTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 30px;
  color: #2c3e50;
`;
const FlagTextEn = styled.h2`
  margin-top: 0;
  margin-bottom: 30px;
  color: #2c3e50;
`;
const FlagTextEs = styled.h2`
  margin-top: 0;
  margin-bottom: 30px;
  color: #2c3e50;
`;
const FlagContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const FlagButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const FlagImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
`;

function LanguageModal({ onSelectLanguage }) {
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>Choose your language:</ModalTitle>
        <FlagContainer>
          <FlagButton onClick={() => onSelectLanguage('en')}>
            <FlagImage src="/image/flag_uk.png" alt="English" />
             <FlagTextEn>English</FlagTextEn>
          </FlagButton>
          <FlagButton onClick={() => onSelectLanguage('es')}>
            <FlagImage src="/image/flag_spain.png" alt="Español" />
            <FlagTextEs>Español</FlagTextEs>
          </FlagButton>
        </FlagContainer>
      </ModalContent>
    </ModalOverlay>
  );
}

export default LanguageModal;