import React from 'react'
import BabyTipsLogo from "../assets/babytips-logo.png"
export default function Header() {
  return (
    <>
        <div className='p-3 bg-primary'>
            <h3 className='text-center'>Descuento disponible por las proximas 48hs</h3>
        </div>
        <nav className='p-3 navbar navbar-expanded-lg bg-secondary d-flex justify-content-around align-items-center'>
            <div className='d-flex justify-content-around align-items-center'>
                <img src={BabyTipsLogo} width={80} />
                <h3 className='d-inline'>Baby Tips</h3>
            </div>
            <div>
                <a className='m-2' style={{textDecoration: 'none'}}>¿Qué vendemos?</a>
                <a className='m-2' style={{textDecoration: 'none'}}>¿Cómo comprar?</a>
                <a className='m-2' style={{textDecoration: 'none'}}>Contactanos</a>
            </div>
        </nav>
    </>
  )
}
