import { React, useState } from "react";
import BabyTipsLogo from "../assets/logos/babytips-logo.png";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg2">
            <div className="container">
                <div>
                    <img src={BabyTipsLogo} width={80} />
                    <h3 className="d-inline">Baby Tips</h3>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo02"
                >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                        <li className="nav-item">
                            <button className="nav-link" href="#" style={{fontSize: '1.3em'}}>
                                ¿Qué ofrecemos?
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" href="#" style={{fontSize: '1.3em'}}>
                                ¿Qué aprenderas?
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" href="#" style={{fontSize: '1.3em'}}>
                                ¿Cómo conseguirlo?
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
