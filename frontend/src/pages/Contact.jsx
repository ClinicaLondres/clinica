import styled from "styled-components";

const ContactContainer = styled.div`
  padding: 200px 20px;
  background-color: #f5f8fa;
  font-family: 'Roboto', sans-serif;
`;

const Title = styled.h1`
  color: #003366;
  text-align: center;
  margin-bottom: 40px;
`;

const Layout = styled.div`
  display: flex;
  gap: 40px;
  max-width: 1100px;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormSection = styled.div`
  flex: 2;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

const InfoSection = styled.div`
  flex: 1;
  background-color: #003366;
  color: #fff;
  padding: 30px;
  border-radius: 8px;

  h3 {
    margin-bottom: 15px;
    font-size: 1.3rem;
  }

  p {
    margin-bottom: 10px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
`;

const Button = styled.button`
  background-color: #005B96;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
  }
`;

function Contact() {
  return (
    <ContactContainer>
      <Title>CONSULTAS</Title>
      <Layout>
        
        <FormSection>
            
          <form>
            <Input type="text" placeholder="Nombre" required />
            <Input type="email" placeholder="Correo electrónico" required />
            <Input type="text" placeholder="Asunto" required />
            <TextArea placeholder="Escribe tu mensaje aquí..." required />
            <Button type="submit">Enviar mensaje</Button>
          </form>
        </FormSection>
        <InfoSection>
          <h3>Información de contacto</h3>
          <p>contacto@clinica.com</p>
          <p>+44 20 7946 0000</p>
          <p>Lunes a Viernes: 9:00 - 18:00</p>
          <p>Atención internacional en español e inglés</p>
        </InfoSection>

      </Layout>
    </ContactContainer>
  );
}

export default Contact;
