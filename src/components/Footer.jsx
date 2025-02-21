import React from 'react';
import { Container , Row , Col } from "react-bootstrap";
import "../styles/Footer.css";
import { Link } from 'react-router-dom';

function Footer () {
    return (
        <footer>
            <Container fluid>
                <Row className="bg-primary text-white p-4">
                    <Col className="contact">
                        <h3>Nous contacter :</h3>
                        <p>101 cours Charlemagne</p>
                        <p>CS 20033</p>
                        <p>69269 LYON CEDEX 02</p>
                        <p>France</p>
                        <p>+33 (0)4 26 73 40 00</p>
                    </Col>
                    <Col className="flex-column fs-5">
                        <h3>Pages Légales</h3>
                        <Link to={"/Mentions"} className="text-white">Mentions légales</Link>
                        <br />
                        <Link to={"/Données"} className="text-white">Données Personnelles</Link>
                        <br />
                        <Link to={"/Accessibilité"} className="text-white">Accessibilité</Link>
                        <br />
                        <Link to={"/Cookies"} className="text-white">Cookies</Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;