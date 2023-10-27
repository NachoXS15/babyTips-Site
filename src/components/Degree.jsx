import React from 'react'
import { Container, Button } from 'react-bootstrap'
import certificado from "../assets/bg/certificado.jpg"
export default function Degree() {
  return (
    <Container className='mt-5 mb-5'>
      <div className='col-md-6 col-lg-6 col-xl-6 mx-auto'>
        <h2 className='text-primary text-center mb-4'>
            ¡Compra este curso y accederas al certificado!
        </h2>
        <div className='d-flex justify-content-around'>
            <img src={certificado} style={{width: '90%'}} alt="" />
        </div>
        <Button
                    variant="primary"
                    size="lg"
                    href="https://go.hotmart.com/A87250455A?ap=fd02"
                    target="_blank"
                    className="w-100 text-light mt-4"
                >
                    Compra este producto a AR$19.162
                </Button>

      </div>
    </Container>
  )
}
