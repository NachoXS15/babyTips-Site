import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/App.css";
export default function Banner() {
    return (
        <Carousel>
            <Carousel.Item id="slider1">
                <div
                    id="overlay"
                    className="d-flex justify-content-center align-items-center"
                >
                    <div className="p-4">
                        <h1
                            className="p-4 text-primary text-center"
                            style={{
                                backgroundColor: "white",
                                fontSize: "3.5em",
                            }}
                        >
                            ¿Querés que tu bebé aprenda a comer solo?
                        </h1>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item id="slider2">
                <div
                    id="overlay"
                    className="d-flex justify-content-center align-items-center"
                >
                    <div className="p-4">
                        <h1
                            className="p-4 text-primary text-center"
                            style={{
                                backgroundColor: "white",
                                fontSize: "3.5em",
                            }}
                        >
                            ¿Querés aprender a alimentar a tu bebé?
                        </h1>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item id="slider3">
                <div
                    id="overlay"
                    className="d-flex justify-content-center align-items-center"
                >
                    <div className="p-4">
                        <h1
                            className="p-4 text-primary text-center"
                            style={{
                                backgroundColor: "white",
                                fontSize: "3.5em",
                            }}
                        >
                            ¿Querés aprender a alimentar a tu bebé?
                        </h1>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}
