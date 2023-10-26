import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/App.css";
export default function Banner() {
    return (
        <Carousel interval={2500}>
            <Carousel.Item id="slider1">
                <div
                    id="overlay"
                    className="d-flex justify-content-center align-items-center"
                >
                    <div className="p-4">
                        <h1
                            className="p-4 text-primary text-center"
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.7)",
                                fontSize: "3em",
                            }}
                        >
                            ¿Querés que tu bebé disfrute sus platillos?
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
                                backgroundColor: "rgba(255, 255, 255, 0.7)",
                                fontSize: "3em",
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
                                backgroundColor: "rgba(255, 255, 255, 0.7)",
                                fontSize: "3em",
                            }}
                        >
                            ¿Querés aprender a cocinar una <br></br> gran variedad de platillos?
                        </h1>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}
