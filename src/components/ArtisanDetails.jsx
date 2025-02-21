import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import Artisans from '../datas/datas.json';
import Formulaire from './Formulaire.jsx';
import "../styles/ArtisanDetails.css"

const ArtisanDetails = () => {
    const [artisan, setArtisans] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const artisanData = Artisans.find(artisan => String(artisan.id) === String(id));
        setArtisans(artisanData);
    }, [id]);

    return (
        <div>
            <h2>Fiche Artisan</h2>
            {!artisan ? (
                <p>Aucun artisan trouvé.</p>
            ) : (
                <div key={artisan.id} className="artisan-card">
                    <h2>{artisan.name}</h2>
                    <p><strong>Spécialité :</strong> {artisan.specialty}</p>
                    <p><strong>A Propos :</strong> {artisan.about}</p>
                    <p><strong>Site-Web :</strong> {artisan.website}</p>
                    <p><strong>Lieu :</strong> {artisan.location}</p>
                    <p><strong>Note :</strong> {artisan.note}</p>
                </div>
            )}
            < Formulaire />
        </div>
    );
};

export default ArtisanDetails;