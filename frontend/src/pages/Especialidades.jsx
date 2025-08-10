import styled from "styled-components";

const Container = styled.div`
  padding: 40px 20px;
  background-color: #f5f8fa;
  font-family: 'Roboto', sans-serif;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: #003366;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 250px; /* Altura uniforme */
  object-fit: contain;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;


const Specialty = styled.h2`
  color: #007bff;
  margin-bottom: 10px;
  text-align: center;
`;

const DoctorName = styled.h3`
  font-size: 1.1rem;
  margin: 10px 0 5px;
  color: #333;
`;

const Treatment = styled.p`
  font-size: 0.9rem;
  color: #555;
  text-align: center;
`;

const ReserveButton = styled.button`
  margin-top: auto;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

function Especialidades() {
  const data = [
    {
      categoria: "Medicina Interna",
      doctores: [
        { nombre: "Dr. Juan Pérez", tratamiento: "Chequeo general y control de enfermedades crónicas", img: "/image/doctor1.jpg" },
        { nombre: "Dra. Laura Gómez", tratamiento: "Prevención y diagnóstico temprano", img: "/image/medico2.png" },
      ],
    },
    {
      categoria: "Dermatología",
      doctores: [
        { nombre: "Dra. Ana Torres", tratamiento: "Tratamiento del acné y cuidado de la piel", img: "/image/doctor3.png" },
        { nombre: "Dr. Carlos Díaz", tratamiento: "Dermatología estética y láser", img: "/image/doctor4.png" },
      ],
    },
    {
      categoria: "Psicología",
      doctores: [
        { nombre: "Lic. Mariana López", tratamiento: "Terapia cognitivo-conductual", img: "/image/medico5.jpg" },
        { nombre: "Lic. Andrés Rivas", tratamiento: "Psicología infantil y familiar", img: "/image/medico6.jpg" },
      ],
    },
    {
      categoria: "Medicina Integrativa",
      doctores: [
        { nombre: "Dr. Pablo Salas", tratamiento: "Medicina funcional y nutrición", img: "/image/medico7.jpg" },
        { nombre: "Dra. Verónica Ruiz", tratamiento: "Terapias complementarias y bienestar", img: "/image/medico8.jpg" },
      ],
    },
  ];

  return (
    <Container>
      <Heading>Especialidades y Profesionales</Heading>
      {data.map((especialidad, idx) => (
        <>
          <Specialty key={idx}>{especialidad.categoria}</Specialty>
          <Grid>
            {especialidad.doctores.map((doc, i) => (
              <Card key={i}>
                <Image src={doc.img} alt={doc.nombre} />
                <DoctorName>{doc.nombre}</DoctorName>
                <Treatment>{doc.tratamiento}</Treatment>
                <ReserveButton onClick={() => alert(`Reservaste cita con ${doc.nombre}`)}>
                  Reservar cita
                </ReserveButton>
              </Card>
            ))}
          </Grid>
        </>
      ))}
    </Container>
  );
}

export default Especialidades;
