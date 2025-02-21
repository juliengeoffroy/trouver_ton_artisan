import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from 'react';

function Alimentation() {
    return (
        <main>
            <h2>Nos Artisans De L'Alimentations</h2>
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
                        <Card.Title><h3>Au Pain Chaud</h3></Card.Title>
                        <Card.Text>
                            <h3>Note: ★★★★★ : 4,8/5</h3>
                            <h3>Spécialité : Boulanger</h3>
                            <h3> Localisation : Montélimar </h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="secondary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><h3>Boucherie Dumont</h3></Card.Title>
                        <Card.Text>
                            <h3>Note: ★★★★★ : 4,5/5</h3>
                            <h3>Spécialité : Boucher</h3>
                            <h3> Localisation : Lyon </h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </main>
    );
};

export default Alimentation;