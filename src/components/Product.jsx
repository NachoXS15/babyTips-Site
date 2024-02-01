import React from "react";
import videoBG from '../assets/bg/video1.mp4'
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
                <video src={videoBG} autoPlay controls className="d-block mt-4" style={{ width: '110%', margin: '0 auto' }} alt="" />
                <div className="d-flex flex-column align-items-center mt-4 mb-4">
                    <h1 className="text-center text-primary" style={{ fontSize: '2.6em' }}>USD$ 49.99</h1>
                    <span>(El precio se regionalizará al momento de compra)</span>
                </div>

                <Button
                    size="lg"
                    href="https://go.hotmart.com/A87250455A?ap=fd02"
                    target="_blank"
                    className="w-100 text-light p-3"
                    style={{ background: '#198754', fontSize: '1.6em', display: 'flex', justifyContent: 'center', gap: '0.5em' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-cart-check" viewBox="0 0 16 16">
                        <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                        Comprar ahora
                </Button>
            </div>
        </div>
    );
}
