/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/ArtisanCard.css"

const ArtisanCard = ({ artisan, onClick }) => {
  return (
    <div className="artisan-card" onClick={() => onClick(artisan)}>
      <img src={artisan.image} alt={artisan.nom} className="artisan-image" />
      <h2>{artisan.name}</h2>
      <h3>Spécialité: {artisan.specialty}</h3>
      <h3>Localisation: {artisan.location}</h3>
      <h3>Note: {artisan.note}</h3>
      <Link to={`/artisan/${artisan.id}`} className="view-details-btn">Voir carte Artisan</Link>
    </div>
  );
};

export default ArtisanCard; 