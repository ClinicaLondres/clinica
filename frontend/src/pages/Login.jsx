import styled from "styled-components";
import logo from "/image/logo.png";
import { useTranslation } from "react-i18next";


const LoginContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #82f877ff, #00b4d8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  padding: 20px;
`;

const Logo = styled.div`
  background: white;
  padding: 15px;
  border-radius: 50%;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%; /* opcional, si tu logo es circular */
    object-fit: contain;
  }
`;
const Title = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 2.2rem;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.3);
`;

const FormSection = styled.div`
  background-color: #ffffff;
  padding: 40px 35px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 14px 16px;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 10px;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: #00b4d8;
    box-shadow: 0 0 8px #00b4d8;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 14px 16px;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  background-color: #0077b6;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 5px 12px rgba(0,119,182,0.6);
  transition: background-color 0.3s, box-shadow 0.3s;
  
  &:hover {
    background-color: #0096c7;
    box-shadow: 0 8px 20px rgba(0,150,199,0.8);
  }

  &:active {
    background-color: #006494;
  }
`;

const HelpText = styled.div`
  margin-top: 15px;
  text-align: center;
  font-size: 0.9rem;
  color: #555;
  a {
    color: #0077b6;
    text-decoration: none;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Contact() {
  const { t, i18n } = useTranslation();
  return (
    <LoginContainer>
      <Logo><img src={logo} alt="Logo" /></Logo>
      <Title>{t('login.title')}</Title>
      <FormSection>
        <form>
          <Input type="email" placeholder={t('login.email')} required />
          <Input type="password" placeholder={t('login.password')} required />
          <Button type="submit">{t('login.loginButton')}</Button>
        </form>
        <HelpText>
          <a href="#">{t('login.noAccount')}</a>
        </HelpText>
        <HelpText>
          <a href="#">{t('login.forgotPassword')}</a>
        </HelpText>
      </FormSection>
    </LoginContainer>
  );
}

export default Contact;
