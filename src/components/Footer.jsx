import React from 'react'

export default function Footer() {
  return (
    // <footer className='container-fluid bg-body-tertiary'>
    //   <div className='container'>
    //     <h2 className='mt-4'>Baby Tips- Consejos Alimenticios</h2>
    //     <div className='row mt-4'>
    //       <ul className='col-lg-3'>
    //         <h2>Contacto</h2>
    //         <li className='list-item' style={{ listStyle: 'none', fontSize: '1.3em'}}><a href="#" style={{textDecoration: 'none'}}>@baby.tips_ok</a></li>
    //         <li className='list-item' style={{ listStyle: 'none', fontSize: '1.3em'}}><a href="#" style={{textDecoration: 'none'}}>@baby.tipsfb</a></li>
    //         <li className='list-item' style={{ listStyle: 'none', fontSize: '1.3em'}}><a href="#" style={{textDecoration: 'none'}}>conectandoaprendizaje@gmail.com</a></li>
    //       </ul>
    //       <div className='col-lg-5'>
    //         <h2>Información</h2>
    //         <p style={{fontSize: '1.3em'}}>BabyTips es una pagina dedicada a otorgar consejos para poder alimentar bebes ahre</p>
    //       </div>  
    //       <div className='col-lg-7'>
    //         <h2>Todos los derechos reservados</h2>
    //       </div>
    //     </div>

    //   </div>
    // </footer>
    <footer className='bg-light text-bg-dark pt-4 pb-5'>
      <div className='container text-center text-md-start '>
        <div className='row text-center text-md-start'>
          <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
            <h5 className='text-uppercase mb-4 font-weight-bold text-primary'>Dejanos ayudarte</h5>
            <hr className='mb-4' />
            <p className='text-dark'>Baby Tips es una pagina dedicada </p>
          </div>
          <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
            <h5 className='text-uppercase mb-4 font-weight-bold text-primary'>Contacto</h5>
             <p><a href="#" className='text-dark'>Instagram</a></p>
             <p><a href="#" className='text-dark'>Facebook</a></p>
             <p><a href="#" className='text-dark'>Correo electronico</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}


