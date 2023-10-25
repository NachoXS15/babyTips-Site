import React from 'react'
import Guia from "../assets/bg/guia.jpg"
import { Button } from 'react-bootstrap'
export default function Product() {
  return (
    <div className='container text-md-start'>
        <div className='col-md-6 col-lg-6 col-xl-6  mx-auto mt-5'>
            <h2 className='text-center text-primary mt-2' style={{fontSize: '2em'}}>Guia para Alimentación de bebes</h2>
            <img src={Guia} className='d-block w-100 mt-4' alt=""/>
            <p className='text-center mt-4' style={{fontSize: '1.2em'}}>
            ¿Quieres saber exactamente cómo alimentar a tu bebé, con los alimentos más nutritivos, evitar que rechace la comida, lograr que coma solo y variado, y todo ello sin pasar horas en la cocina?            </p>
            <Button variant='primary' size='lg' href='https://go.hotmart.com/A87250455A?ap=fd02' target='_blank' className='w-100 text-light'>Comprar Producto</Button>
        </div>
    </div>
  )
}
