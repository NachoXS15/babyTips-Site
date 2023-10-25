import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-primary text-bg-dark pt-4 pb-5'>
      <div className='container text-center text-md-start '>
        <div className='row text-center text-md-start'>
          <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
            <h5 className='text-uppercase mb-4 font-weight-bold text-light'>Nosotros</h5>
            <hr className='mb-4' />
            <p className='text-light'>Baby Tips es una pagina dedicada a la difusión de cursos de Seminario Online, ninguno de los contenidos de estos cursos nos pertenece.</p>
          </div>
          <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
            <h5 className='text-uppercase mb-4 font-weight-bold text-primary'>Contacto</h5>
             <p><a href="#" className='text-light'>Instagram</a></p>
             <p><a href="#" className='text-light'>Facebook</a></p>
             <p><a href="#" className='text-light'>Correo electronico</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}


