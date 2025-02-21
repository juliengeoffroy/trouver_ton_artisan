import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "../styles/Batiment.css";
import React from 'react';

function Batiment() {
    return ( 
        <main>
            <h2>Nos Artisans Du Bâtiment</h2> 
            <CardGroup >
                <Card border="secondary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><h3>Vallis Bellemare</h3></Card.Title>
                        <Card.Text>
                            <h3>Note: ★★★★ : 4/5</h3>
                            <h3>Spécialité : Plombier</h3>
                            <h3> Localisation : Vienne </h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="secondary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><h3>Boutot & Fils</h3></Card.Title>
                        <Card.Text>
                            <h3>Note: ★★★★★ : 4,7/5</h3>
                            <h3>Spécialité : Menuisier</h3>
                            <h3> Localisation : Bourg-en-Bresse </h3>
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
                        <Card.Title><h3>Mont Blanc Eléctricité</h3></Card.Title>
                        <Card.Text>
                            <h3>Note: ★★★★★ : 4,5/5</h3>
                            <h3>Spécialité : Eléctricien</h3>
                            <h3> Localisation : Chamonix </h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="secondary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><h3>Traiteur Truchon</h3></Card.Title>
                        <Card.Text>
                            <h3>Note: ★★★★★ : 4,1/5</h3>
                            <h3>Spécialité : Traiteur</h3>
                            <h3> Localisation : Privas </h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup> 
        </main>
    );
}

export default Batiment