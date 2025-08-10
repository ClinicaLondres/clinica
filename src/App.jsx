import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Inicio from "./pages/Principal.jsx";
import Footer from "./components/footer.jsx";
import About from "./pages/About.jsx";
import Especialidades from "./pages/Especialidades.jsx"; 

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/about" element={<About />} />
          <Route path="/especialidades" element={<Especialidades />} />  
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
