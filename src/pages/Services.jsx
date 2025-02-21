import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from 'react';

function Services() {
    return ( 
        <main>
            <h2>Nos Artisans De Services</h2> 
            <CardGroup >
                <Card border="secondary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><h3>Leala Dennis</h3></Card.Title>
                        <Card.Text>
                            <h3>Note: ★★★★ : 3,8/5</h3>
                            <h3>Spécialité : Coiffeur</h3>
                            <h3> Localisation : Chambéry </h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="secondary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><h3>Valérie Laderoute</h3></Card.Title>
                        <Card.Text>
                            <h3>Note: ★★★★★ : 4,5/5</h3>
                            <h3>Spécialité : Toiletteur</h3>
                            <h3> Localisation : Valence </h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="secondary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><h3>CM Graphisme</h3></Card.Title>
                        <Card.Text>
                            <h3>Note: ★★★★★ : 4,4/5</h3>
                            <h3>Spécialité : Webdesign</h3>
                            <h3> Localisation :Valence </h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="secondary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><h3>Le Monde Des Fleurs</h3></Card.Title>
                        <Card.Text>
                            <h3>Note: ★★★★★ : 4,6/5</h3>
                            <h3>Spécialité : Fleuriste</h3>
                            <h3> Localisation : Annonay </h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="secondary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><h3>Royden Charbonneau</h3></Card.Title>
                        <Card.Text>
                            <h3>Note: ★★★★ : 3,8/5</h3>
                            <h3>Spécialité : Carrossier</h3>
                            <h3> Localisation : Saint-Priest </h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="secondary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><h3>C'est Sup'Hair</h3></Card.Title>
                        <Card.Text>
                            <h3>Note: ★★★★★ : 4,1/5</h3>
                            <h3>Spécialité : Coiffeur</h3>
                            <h3> Localisation : Romans-sur-Isère </h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </main> 
    );
}

export default Services