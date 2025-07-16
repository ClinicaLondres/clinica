import styled from "styled-components";
import "@fontsource/lora";
import { FaChevronRight } from "react-icons/fa";

const AboutContainer = styled.div`
  padding: 60px 20px;
  background-color: #f5f8fa;
  font-family: 'Roboto', sans-serif;
`;

const Banner = styled.div`
  width: 100%;
  height: 350px;
  overflow: hidden;
  border-radius: 16px;
  margin-bottom: 40px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  background: linear-gradient(to right, #e8f1f9, #f5f8fa);
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const IndexLinks = styled.aside`
  flex: 1;
  max-width: 280px;
  position: sticky;
  top: 100px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  border: 1px solid #dee2e6;

  @media (max-width: 768px) {
    position: static;
    max-width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    color: #003366;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;

    &:hover {
      color: #007bff;
    }
  }
`;

const IndexTitle = styled.h3`
  font-size: 1.2rem;
  color: #003366;
  text-align: center;
  margin-bottom: 12px;
`;

const Content = styled.div`
  flex: 3;
`;

const Title = styled.h1`
  font-family: 'Lora', serif;
  font-size: 2.5rem;
  color: #002f6c;
  margin: 40px auto 20px;
  text-align: center;
`;

const SubTitle = styled.h2`
  font-family: 'Lora', serif;
  font-size: 1.8rem;
  color: #004b87;
  margin: 30px auto 15px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #444;
  max-width: 900px;
  margin: 0 auto 20px;
  line-height: 1.6;
  text-align: justify;
`;

const List = styled.ul`
  max-width: 800px;
  margin: 0 auto 30px;
  padding-left: 20px;
  color: #444;
  text-align: left;
`;

const ListItem = styled.li`
  margin-bottom: 14px;
  line-height: 1.6;
  position: relative;
  padding-left: 26px;

  &::before {
    content: "✔";
    color: #28a745;
    font-weight: bold;
    position: absolute;
    left: 0;
  }
`;



const HighlightBox = styled.div`
  background-color: #f0f7ff;
  border-left: 4px solid #007bff;
  padding: 20px;
  margin: 20px auto;
  border-radius: 10px;
  max-width: 900px;
`;





function About() {
  return (
    <AboutContainer>
      <Banner>
        <BannerImage src="/image/telemedicine.png" alt="Equipo profesional en salud mental" />
      </Banner>

      <Layout>
        <IndexLinks>
          <IndexTitle>Navegación rápida</IndexTitle>
          <a href="#mision"><FaChevronRight /> Misión</a>
          <a href="#vision"><FaChevronRight /> Visión</a>
          <a href="#valores"><FaChevronRight /> Valores</a>
          <a href="#diferentes"><FaChevronRight /> ¿Qué nos hace diferentes?</a>
          <a href="#bilingue"><FaChevronRight /> Atención bilingüe</a>
          <a href="#enfoque"><FaChevronRight /> Enfoque integrativo</a>
          <a href="#equipo"><FaChevronRight /> Equipo multidisciplinario</a>
          <a href="#experiencia"><FaChevronRight /> Experiencia internacional</a>
        </IndexLinks>

        <Content>
          <Title>¿Quiénes somos?</Title>
          <HighlightBox>
            <Paragraph>
              Somos una clínica de telemedicina internacional bilingüe, especializada en salud mental con un enfoque integrativo. Brindamos atención profesional en español e inglés, conectando personas alrededor del mundo con un equipo altamente calificado de psiquiatras, psicólogos y otros profesionales de la salud.
            </Paragraph>
            <Paragraph>
              Ofrecemos un modelo de atención centrado en la persona, que combina la ciencia médica con una mirada humana, culturalmente sensible y coordinada entre especialidades. Nuestro objetivo es romper barreras geográficas, lingüísticas y culturales para que más personas puedan acceder a un acompañamiento clínico de calidad.
            </Paragraph>
          </HighlightBox>

          <SubTitle id="mision">Misión</SubTitle>
          <HighlightBox>
            <Paragraph>
              Brindar atención en salud mental de alta calidad a nivel internacional, en inglés y español, a través de un modelo de telemedicina integrativa, centrado en la persona.
            </Paragraph>
          </HighlightBox>

          <SubTitle id="vision">Visión</SubTitle>
          <HighlightBox>
            <Paragraph>
              Ser un referente internacional en salud mental integrativa, reconocido por su excelencia clínica, calidez humana y capacidad de integrar el saber científico con un enfoque interdisciplinario y personalizado.
            </Paragraph>
          </HighlightBox>

          <SubTitle id="valores">Valores</SubTitle>
          <HighlightBox>
            <List>
              <ListItem><strong>Humanización del cuidado:</strong> centrados en la persona, su dignidad y su contexto cultural.</ListItem>
              <ListItem><strong>Excelencia clínica:</strong> altos estándares y actualización continua.</ListItem>
              <ListItem><strong>Accesibilidad e inclusión:</strong> atención bilingüe, equitativa y respetuosa de la diversidad.</ListItem>
              <ListItem><strong>Enfoque integrativo:</strong> mirada holística que combina cuerpo, mente y entorno.</ListItem>
              <ListItem><strong>Trabajo interdisciplinario:</strong> abordaje conjunto entre distintas especialidades.</ListItem>
              <ListItem><strong>Confidencialidad y ética:</strong> compromiso con la privacidad y el respeto profesional.</ListItem>
              <ListItem><strong>Innovación:</strong> tecnología al servicio de la salud mental.</ListItem>
            </List>
          </HighlightBox>

          <SubTitle id="diferentes">¿Qué nos hace diferentes?</SubTitle>
          <HighlightBox>
            <Paragraph>
              Nos guiamos por principios de excelencia clínica, ética profesional, empatía y respeto por la diversidad. Ofrecemos atención profesional, confidencial, adaptada a las necesidades individuales y accesible desde cualquier lugar del mundo.
            </Paragraph>
          </HighlightBox>

          <SubTitle id="bilingue">Atención bilingüe</SubTitle>
          <HighlightBox>
            <Paragraph>
              Todos nuestros servicios están disponibles en español e inglés, con profesionales capacitados para atender en ambos idiomas.
            </Paragraph>
          </HighlightBox>

          <SubTitle id="enfoque">Enfoque integrativo</SubTitle>
          <HighlightBox>
            <Paragraph>
              Combinamos herramientas médicas, psicológicas y complementarias para brindar un tratamiento integral del ser humano.
            </Paragraph>
          </HighlightBox>

          <SubTitle id="equipo">Equipo multidisciplinario</SubTitle>
          <HighlightBox>
            <Paragraph>
              Contamos con psiquiatras, psicólogos y profesionales de la salud general para garantizar una atención integral y coordinada.
            </Paragraph>
          </HighlightBox>

          <SubTitle id="experiencia">Experiencia internacional</SubTitle>
          <HighlightBox>
            <Paragraph>
              Atendemos pacientes en más de 20 países, adaptándonos a diferentes culturas y contextos con profesionalismo y sensibilidad.
            </Paragraph>
          </HighlightBox>
        </Content>
      </Layout>
    </AboutContainer>
  );
}

export default About;
