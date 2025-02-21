/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const RechercheArtisans = ({ artisans, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredArtisans = artisans.filter((artisan) =>
    artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    artisan.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artisan.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Rechercher un artisan..."
      />
      {/* Afficher la liste des artisans seulement si searchTerm n'est pas vide */}
      {searchTerm && (
        <ul>
          {filteredArtisans.length > 0 ? (
            filteredArtisans.map((artisan) => (
              <li key={artisan.id} onClick={() => onSelect(artisan)}>
                {artisan.name} - {artisan.specialty} - {artisan.location}
              </li>
            ))
          ) : (
            <li>Aucun artisan trouvé.</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default RechercheArtisans;