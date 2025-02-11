import { Carousel } from "react-bootstrap";
import "../styles/App.css";
export default function Banner() {
    return (
        <Carousel interval={1500}>
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
                            Con nuestro método de auto-aprendizaje
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
                            Y nuestro método de auto-regulación
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
                            Tu bebé comerá solo antes de los 12 meses
                        </h1>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}
