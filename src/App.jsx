import './styles/App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar  from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Accueil from './pages/Accueil.jsx';
import Batiment from './pages/Batiment.jsx';
import Services from './pages/Services.jsx';
import Fabrication from './pages/Fabrication.jsx';
import Alimentation from './pages/Alimentation.jsx';
import Mentions from './components/Mentions.jsx';
import Données from './components/Données.jsx';
import Accessibilité from './components/Accessibilité.jsx';
import Cookies from './components/Cookies.jsx';
import Formulaire from './components/Formulaire.jsx';
import RechercheArtisans from './components/RechercheArtisans.jsx';
import ArtisanCard from './components/ArtisanCard';
import data from './datas/datas.json';
import ArtisanDetails from "./components/ArtisanDetails.jsx"

function App() {
  const [artisans, setArtisans] = useState([]);
  const [selectedArtisan, setSelectedArtisan] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simuler le chargement des données depuis le fichier JSON
    console.log(data);
    setArtisans(data);
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    // Réinitialiser l'artisan sélectionné si la recherche est vide
    if (term === '') {
      setSelectedArtisan(null);
    } else {
      // Trouver l'artisan correspondant à la recherche
      const foundArtisan = artisans.find(artisan => artisan.name.toLowerCase().includes(term.toLowerCase()));
      setSelectedArtisan(foundArtisan || null); // Si trouvé, sélectionne, sinon réinitialise
    }
  };  

  const handleSelectArtisan = (artisan) => {
    setSelectedArtisan(artisan);
  };
  
  return (
    <div className="App">
      <header>
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/contact" element={<Formulaire />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/batiment" element={<Batiment />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fabrication" element={<Fabrication />} />
          <Route path="/alimentation" element={<Alimentation />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/données" element={<Données />} />
          <Route path="/accessibilité" element={<Accessibilité />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/artisan/:id" element={<ArtisanDetails />} />
        </Routes>
      </header>
      <h2>Recherche D'Artisans</h2>
      <br />
      <RechercheArtisans artisans={artisans} onSelect={handleSelectArtisan} searchTerm={searchTerm} onSearch={handleSearch} />
      {selectedArtisan ? (
        <ArtisanCard artisan={selectedArtisan} />
      ) : (
        <p>Veuillez sélectionner un artisan.</p>
      )}
      <Footer />
    </div>
  );
}

export default App
  