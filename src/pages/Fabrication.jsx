import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from 'react';

function Fabrication() {
    return ( 
        <main>
            <h2>Nos Artisans De Fabrications</h2> 
            <CardGroup >
                <Card border="secondary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><h3>Amitee Lecuyer</h3></Card.Title>
                        <Card.Text>
                            <h3>Note: ★★★★★ : 4,5/5</h3>
                            <h3>Spécialité : Couturier</h3>
                            <h3> Localisation : Annecy </h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="secondary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><h3>Claude Quinn</h3></Card.Title>
                        <Card.Text>
                            <h3>Note: ★★★★★ : 4,2/5</h3>
                            <h3>Spécialité : Bijoutier</h3>
                            <h3> Localisation : Aix-les-bains </h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="secondary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><h3>Ernest Carignan</h3></Card.Title>
                        <Card.Text>
                            <h3>Note: ★★★★★ : 5/5</h3>
                            <h3>Spécialité : Ferronier</h3>
                            <h3> Localisation : Le Puy-en-Velay </h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </main>
    );
}

export default Fabrication