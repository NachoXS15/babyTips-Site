import React from 'react'
import { Container } from 'react-bootstrap'
import certificado from "../assets/bg/certificado.jpg"
export default function Degree() {
  return (
    <Container className='mt-5 mb-5'>
        <h2 className='text-primary text-center mb-4'>
            ¡Compra este curso y accederas al certificado!
        </h2>
        <div className='d-flex justify-content-around'>
            <img src={certificado} style={{width: '70%'}} alt="" />
        </div>
    </Container>
  )
}
