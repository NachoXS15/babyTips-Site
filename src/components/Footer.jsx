import React from 'react'

export default function Footer() {
  return (
    <footer className='container-fluid bg-secondary'>
      <div className='container'>
        <h2 className='mt-4'>Baby Tips- Consejos Alimenticios</h2>
        <div className='row mt-4'>
          <ul className='col-lg-3'>
            <h2>Contacto</h2>
            <li className='list-item' style={{ listStyle: 'none', fontSize: '1.3em'}}><a href="#" style={{textDecoration: 'none'}}>@baby.tips_ok</a></li>
            <li className='list-item' style={{ listStyle: 'none', fontSize: '1.3em'}}><a href="#" style={{textDecoration: 'none'}}>@baby.tipsfb</a></li>
            <li className='list-item' style={{ listStyle: 'none', fontSize: '1.3em'}}><a href="#" style={{textDecoration: 'none'}}>conectandoaprendizaje@gmail.com</a></li>
          </ul>
          <div className='col-lg-5'>
            <h2>Información</h2>
            <p style={{fontSize: '1.3em'}}>BabyTips es una pagina dedicada a otorgar consejos para poder alimentar bebes ahre</p>
          </div>  
          <div className='col-lg-7'>
            <h2>Todos los derechos reservados</h2>
          </div>
        </div>

      </div>
    </footer>
  )
}
