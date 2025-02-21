import "../styles/Accueil.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from 'react';
import ArtisanCard from '../components/ArtisanCard.jsx';
import ArtisansData from '../datas/datas.json';

function Accueil() {
    
    return (
        <main>
            <h1>Comment Trouver Mon Artisan ?</h1>
            <section className="infos">
                <ol>
                    <li>Choisir la Categorie d'Artisanat dans le Menu.</li>
                    <li>Choisir un Artisan.</li>
                    <li>Le contacter via le Formulaire de Contact.</li>
                    <li>Une réponse sera Apportée sous 48h.</li>
                </ol>
            </section>
            <h2>Les Trois Artisans Du Mois</h2>
            <CardGroup >
                <Card border="secondary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><h3>Chocolaterie Labbé</h3></Card.Title>
                        <Card.Text>
                            <h3>Note: ★★★★★ : 4,9/5</h3>
                            <h3>Spécialité : Chocolatier</h3>
                            <h3> Localisation : Grenoble </h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="secondary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><h3>Orville Salmons</h3></Card.Title>
                        <Card.Text>
                            <h3>Note: ★★★★★ : 5/5</h3>
                            <h3>Spécialité : Chauffagiste</h3>
                            <h3> Localisation : Evian </h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="secondary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><h3>Au Pain Chaud</h3></Card.Title>
                        <Card.Text>
                            <h3>Note: ★★★★★ : 4,8/5</h3>
                            <h3>Spécialité : Boulanger</h3>
                            <h3> Localisation : Montélimar </h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                <div className="home">
                    <h2>Liste des Artisans</h2>
                    <div className="artisan-list">
                        {ArtisansData.map((artisan) => (
                            <ArtisanCard key={artisan.id} artisan={artisan} />
                        ))}
                    </div> 
                </div>
            </CardGroup>
        </main>
    );
};

export default Accueil