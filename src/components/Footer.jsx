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
          <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
            <h5 className='text-uppercase mb-4 font-weight-bold text-light'>Contacto</h5>
            <hr className='mb-4' />
             <p><a target="_blank" href="https://www.instagram.com/baby.tips_ok/" className='text-light'>Instagram</a></p>
             <p><a target="_blank" href="https://www.facebook.com/profile.php?id=61552697488032&mibextid=ZbWKwL" className='text-light'>Facebook</a></p>
             <p><a target="_blank" href="mailto:conectandoaprendizaje73@gmail.com" className='text-light'>Correo electronico</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}


