import React, { useState, useEffect } from 'react';
import ArtisanCard from './ArtisanCard.jsx';
import '../styles/ArtisanList.css'

const ArtisansList = () => {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetch('../datas/datas.json')
      .then(response => response.json())
      .then(data => setArtisans(data));
  }, []);

  return (
    <div className="artisans-list">
      {artisans.map(artisan => (
        <ArtisanCard key={artisan.id} artisan={artisan} />
      ))}
    </div>
  );
};

export default ArtisansList;
