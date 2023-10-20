import { React, useState } from "react";
import BabyTipsLogo from "../assets/logos/babytips-logo.png";

export default function Header() {
    const [headerOpen, setHeaderOpen] = useState(false);

    const toggleMenu = () => {
        setHeaderOpen(true);
    };
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <div>
                    <img src={BabyTipsLogo} width={80} />
                    <h3 className="d-inline">Baby Tips</h3>
                </div>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                
                                href="#"
                            >
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Link
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Disabled
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
