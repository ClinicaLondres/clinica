import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './styles/App.css';

// Importa tus componentes
import Navbar from "./components/Navbar";
import Footer from "./components/footer.jsx";
import LanguageModal from './components/LanguageModal'; 

// Importa las páginas
import Inicio from "./pages/Principal.jsx";
import About from "./pages/About.jsx";
import ServiciosPage from "./pages/ServiciosPage.jsx"; 
import EspecialidadDetalle from "./pages/EspecialidadDetalle.jsx"; 
import EquipoPage from './pages/EquipoPage.jsx';

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
          {/* Rutas que ya tenías */}
          <Route path="/" element={<Inicio />} />
          <Route path="/about" element={<About />} />
          <Route path="/equipo" element={<EquipoPage />} />
          <Route path="/especialidades" element={<ServiciosPage />} />
          <Route path="/especialidades/:especialidadId" element={<EspecialidadDetalle />} />

        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;