import React from "react";
import bg2 from "../assets/bg/bg2.jpg"


export default function Info() {
    return (
        <section className="container text-md-start mt-4 mb-4">
            <div className="row text-center text-md-start">
            <h2 className='text-center text-primary font-weight-bold mt-3 mb-3'>¿Qué aprenderás en este curso?</h2>

                <div className="col-md-6 col-lg-6 col-xl-6  mx-auto mt-3">
                    <div>
                        <img src={bg2} className="d-block w-100" />
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mt-3 d-flex align-items-center">
                    <p style={{fontSize: '1.4em'}}>Aprenderás los conceptos de nutrición para proporcionar alimentos saludables a tu bebé y garantizar que coma adecuadamente, mientras le enseñas a disfrutar de la comida de forma autónoma, promoviendo una relación positiva con la alimentación a lo largo de su vida.</p>
                </div>
            </div>
            <div className="row text-center text-md-start">
                <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mt-3 d-flex align-items-center">
                    <p style={{fontSize: '1.4em'}}>Aprenderás los conceptos de nutrición para proporcionar alimentos saludables a tu bebé y garantizar que coma adecuadamente, mientras le enseñas a disfrutar de la comida de forma autónoma, promoviendo una relación positiva con la alimentación a lo largo de su vida.</p>
                </div>

                <div className="col-md-6 col-lg-6 col-xl-6  mx-auto mt-3">
                    <div>
                        <img src={bg2} className="d-block w-100" />
                    </div>
                </div>
            </div>
        </section>
    );
}