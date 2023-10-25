import React from 'react'
import Guia from "../assets/bg/guia.jpg"
export default function Product() {
  return (
    <div className='container text-md-start'>
        <div className='col-md-6 col-lg-6 col-xl-6  mx-auto mt-5'>
            <h2 className='text-center text-primary mt-2' style={{fontSize: '2em'}}>Guia para Alimentación de bebes</h2>
            <img src={Guia} className='d-block w-100 mt-4' alt=""/>
            <p className='text-center mt-4' style={{fontSize: '1em'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium amet, ex ducimus quis sint praesentium! Sed commodi tempore, quasi natus quam eligendi veniam consequatur sint nesciunt placeat nobis ipsum?
            </p>
        </div>

    </div>
  )
}
