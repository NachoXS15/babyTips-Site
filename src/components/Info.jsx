import React from "react";
import plato from "../assets/bg/plato.jpg";
import bg3 from "../assets/bg/bg5.jpg";
import bg7 from "../assets/bg/bg7.jpg";
export default function Info() {
    return (
        <section className="container text-md-start mt-4 mb-4" id="info">
            <div className="row text-center text-md-start">
                <h2 className="text-center text-primary font-weight-bold mt-3 mb-3">
                    ¿Qué aprenderás en este curso?
                </h2>
                <hr />
                <div className="col-md-6 col-lg-6 col-xl-6  mx-auto mt-3">
                    <div className="d-block w-100">
                        <img src={bg3} style={{ width: "90%" }} />
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mt-3 p-4 d-flex align-items-center">
                    <p style={{ fontSize: "1.2em" }}>
                        Lograras que tu bebé aprenda a comer solo y de manera
                        divertida, y asi desarrollar una relación saludable con
                        la comida a lo largo de su vida.
                    </p>
                </div>
            </div>
            <hr className="m-4" />
            <div className="row text-center text-md-start">
                <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mt-3 p-4 d-flex align-items-center">
                    <p style={{ fontSize: "1.2em" }}>
                        Te guiaremos a través de las dos fases claves de la
                        introducción de alimentos: <strong>Papillas</strong>, y
                        luego, <strong>Alimentos Solidos</strong>; como así
                        tambien los problemas que surgan de atoramiento,
                        reacciones alergicas y falta de apetito.
                    </p>
                </div>

                <div className="col-md-6 col-lg-6 col-xl-6  mx-auto mt-3">
                    <div className="d-block w-100">
                        <img src={plato} style={{ width: "90%" }} />
                    </div>
                </div>
            </div>
            <hr className="m-4" />

            <div className="row text-center text-md-start">
                <div className="col-md-6 col-lg-6 col-xl-6  mx-auto mt-3">
                    <div className="d-block w-100">
                        <img src={bg7} style={{ width: "90%" }} />
                    </div>
                </div>

                <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mt-3 p-4 d-flex align-items-center">
                    <p style={{ fontSize: "1.2em" }}>
                        Aprenderás a cocinar platillos nutritivos y fáciles, que
                        podrás ofrecer a tu bebé y a toda la familia, sin pasar
                        horas en la cocina ni gastar una fortuna en ingredientes
                        o alimentos especiales.
                    </p>
                </div>
            </div>
        </section>
    );
}
