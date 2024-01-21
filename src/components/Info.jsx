import React from "react";
import plato from "../assets/bg/plato.jpg";
import bg3 from "../assets/bg/bg5.jpg";
import bg7 from "../assets/bg/bg7.jpg";
import bg11 from "../assets/bg/bg11.jpg"
export default function Info() {
    return (
        <section className="container text-md-start mt-4 mb-4" id="info">
            <div className="row text-center text-md-start">
                <h2 className="text-center text-primary mt-3 mb-3" style={{fontWeight: 700}}>
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
                    Te enseñaremos técnicas probadas para ayudar a tu bebé a desarrollar 
                    habilidades motoras y de coordinación mientras comen por sí mismos. 
                    Desde el uso de cucharas hasta la exploración táctil y sensorial, cada paso es importante.
                        
                    </p>
                </div>
            </div>
            <hr className="m-4" />
            <div className="row text-center text-md-start">
                <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mt-3 p-4 d-flex align-items-center">
                    <p style={{ fontSize: "1.2em" }}>
                    La transición de papillas a <strong>alimentos sólidos</strong> es única para cada bebé. 
                    Nuestro curso te guiará para identificar las señales de tu bebé y ajustar el 
                    proceso de acuerdo a sus necesidades individuales.
                    
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci accusantium natus perferendis vero! Exercitationem, placeat quidem odio repudiandae voluptates, eaque quaerat quis illo deleniti assumenda voluptate adipisci, sit recusandae!
                    </p>
                </div>
            </div>
            <hr className="m-4" />

            <div className="row text-center text-md-start">
                <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mt-3 p-4 d-flex align-items-center">
                    <p style={{ fontSize: "1.2em" }}>
                    Al unirte a nuestro curso, tendrás acceso a una <strong>comunidad de padres</strong> en la misma situación. 
                    Comparte tus experiencias, obtén consejos y apoyo de otros padres que están pasando por la misma etapa.
                    </p>
                </div>

                <div className="col-md-6 col-lg-6 col-xl-6  mx-auto mt-3">
                    <div className="d-block w-100">
                        <img src={bg11} style={{ width: "90%" }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
