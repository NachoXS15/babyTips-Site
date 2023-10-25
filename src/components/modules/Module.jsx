import React from "react";
import { Card } from "react-bootstrap";
import bebe1 from "../../assets/bg/bebe1.jpg"

export default function Module({title, desc, url}) {
    return (
        <Card
            className="text-center bg-primary text-secondary w-100 mb-4"
            
        >
            <Card.Img src={bebe1}></Card.Img>
            <Card.Body>
                <Card.Title className="text-decoration-underline">
                    {title}
                </Card.Title>
                <Card.Text>{desc}</Card.Text>
            </Card.Body>
        </Card>
    );
}
