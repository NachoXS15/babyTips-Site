import { React, useState } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import BabyTipsLogo from "../assets/logos/babytips-logo.png";

export default function Header() {
    return (
        <Navbar expand="lg" className="bg-secondary">
            <Container>
            <div className="d-flex align-items-center">
                <img src={BabyTipsLogo} width={80} />
                <h3 className="d-inline">Baby Tips</h3>
            </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                        <Nav.Link style={{fontSize: '1.3em'}} href="#guia">¿Qué ofrecemos?</Nav.Link>
                        <Nav.Link style={{fontSize: '1.3em'}} href="#info">¿De qué trata?</Nav.Link>
                        <Nav.Link style={{fontSize: '1.3em'}} href="#modulos">¿Qué aprenderas</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}
