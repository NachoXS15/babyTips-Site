import React from 'react'
import "../App.css";
export default function Banner() {
  return (
    <section id='banner'>
      <div id="overlay" className='d-flex justify-content-center align-items-center'>
        <h1 className="p-4" style={{backgroundColor: 'white', fontSize: '3.5em'}}>¿Quieres aprender a alimantar a tu bebé?</h1>
      </div>
    </section>
  )
}
