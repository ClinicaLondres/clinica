import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './styles/App.css';

import Navbar from "./components/Navbar";
import Footer from "./components/footer.jsx";
import LanguageModal from './components/LanguageModal'; 

import Inicio from "./pages/Principal.jsx";
import About from "./pages/About.jsx";
import ServiciosPage from "./pages/ServiciosPage.jsx";
import EspecialidadDetalle from "./pages/EspecialidadDetalle.jsx";
import AppointmentPage from './pages/AppointmentPage.jsx';
import EquipoPage from './pages/EquipoPage.jsx';
import DoctorProfilePage from './pages/DoctorProfilePage.jsx';
import Contact from './pages/Contact.jsx';
import BlogPage from './pages/BlogPage.jsx';
import Login from './pages/Login.jsx'; 

function App() {
  const { i18n } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const languagePreference = localStorage.getItem('languagePreference');
    if (!languagePreference) {
      setModalOpen(true);
    }
  }, []);

  const handleSelectLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('languagePreference', lang);
    setModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <LanguageModal onSelectLanguage={handleSelectLanguage} />}

      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/about" element={<About />} />
          <Route path="/especialidades" element={<ServiciosPage />} />
          <Route path="/especialidades/:especialidadId" element={<EspecialidadDetalle />} />
          <Route path="/citas" element={<AppointmentPage />} />
          <Route path="/equipo" element={<EquipoPage />} />
          <Route path="/equipo/:doctorId" element={<DoctorProfilePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
