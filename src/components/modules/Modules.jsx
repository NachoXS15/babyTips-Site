import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import '../../styles/App.css'

import Module from "./Module";

export default function Modules() {
    return (
        <>
            <Container  id="modulos">
                <h2 className="text-center text-primary mt-5" style={{fontWeight: 700}}>
                    ¿Qué vas a aprender?
                </h2>
                <hr className="m-4" />
                <Container className=" h-100">
                    <Row className="mt-4 mb-4">
                        <Module />
                    </Row>
                </Container>
            </Container>
        </>
    );
}
