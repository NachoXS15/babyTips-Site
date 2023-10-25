import React from 'react'
import "../App.css";
export default function Banner() {
  return (
    <section id='banner'>
      <div id="overlay" className='d-flex justify-content-center align-items-center'>
        <div className='p-4'>
          <h1 className="p-4 text-primary text-center" style={{backgroundColor: 'white', fontSize: '3.5em'}}>¿Querés aprender a alimentar a tu bebé?</h1>
        </div>
      </div>
    </section>
  )
}
