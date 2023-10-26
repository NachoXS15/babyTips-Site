import React from "react";
import { Container, Row, Card } from "react-bootstrap";

import Module from "./Module";

export default function Modules() {
    return (
        <>
            <Container className="w-100" id="modulos">
                <h2 className="text-center text-primary mt-5">
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
