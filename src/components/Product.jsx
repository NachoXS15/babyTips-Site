import React from "react";
import videoBG from '../assets/bg/video.mp4'
import Guia from "../assets/bg/guia.jpg";
import { Button } from "react-bootstrap";
import "../styles/style.css"
export default function Product() {
    return (
        <div className="container text-md-start p-5" id="guia">
            <div className="col-md-6 col-lg-6 col-xl-6  mx-auto mt-5">
                <h2
                    className="text-center text-primary mt-2"
                    style={{ fontSize: "2em", fontWeight: 700 }}
                >
                    Guia para Alimentación de bebes
                </h2>
                <video src={videoBG} autoPlay controls className="d-block w-100 mt-4" alt="" />
                <p className="text-center mt-4" style={{ fontSize: "1.2em" }}>
                    ¿Quieres saber exactamente cómo alimentar a tus hijos, con
                    los alimentos más nutrivitos, evitar que rechace la comida,
                    lograr que coma solo y variado, y todo ello sin pasar horas
                    en la cocina?
                </p>
                <div className="d-flex flex-column align-items-center mb-4">
                    <h1 className="text-center text-primary" style={{fontSize: '2.6em'}}>USD$ 49.99</h1>
                    <span>(El precio se regionalizará al momento de compra)</span>
                </div>

                <Button
                    size="lg"
                    href="https://go.hotmart.com/A87250455A?ap=fd02"
                    target="_blank"
                    className="w-100 text-light p-4"
                    style={{background: '#198754', fontSize: '1.6em'}}
                >
                    Comprar ahora
                </Button>
            </div>
        </div>
    );
}
