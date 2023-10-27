import React from "react";
import Guia from "../assets/bg/guia.jpg";
import { Button } from "react-bootstrap";
import "../styles/style.css"
export default function Product() {
    return (
        <div className="container text-md-start" id="guia">
            <div className="col-md-6 col-lg-6 col-xl-6  mx-auto mt-5">
                <h2
                    className="text-center text-primary mt-2"
                    style={{ fontSize: "2em" }}
                >
                    Guia para Alimentación de bebes
                </h2>
                <img src={Guia} className="d-block w-100 mt-4" alt="" />
                <p className="text-center mt-4" style={{ fontSize: "1.2em" }}>
                    ¿Quieres saber exactamente cómo alimentar a tus hijos, con
                    los alimentos más nutrivitos, evitar que rechace la comida,
                    lograr que coma solo y variado, y todo ello sin pasar horas
                    en la cocina?
                </p>
                <div className="d-flex justify-content-center mb-3 text-primary" style={{gap:'2em'}}>
                    <h1 className="text-center " style={{fontSize: '3em', marginLeft: '2.5em'}}>$19.162</h1>
                    <h3 style={{textDecoration: 'line-through'}} className="text-danger">$49.219</h3>
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
