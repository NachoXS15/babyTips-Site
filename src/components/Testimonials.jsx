import React from 'react'
import { Container } from 'react-bootstrap'
import video2 from '../assets/bg/video2.mp4'
import video3 from '../assets/bg/03.mp4'
import video7 from '../assets/bg/07.mp4'
import video11 from '../assets/bg/11.mp4'
import video15 from '../assets/bg/15.mp4'

function Testimonials() {
  return (
    <>
        <div className='w-75 mb-4' style={{margin: '0 auto'}}>
            <h2 className='text-center text-primary' style={{fontWeight: 700}}>Testimonios</h2>
            <p className='text-center' style={{ fontSize: "1.2em" }}>Aquí encontrarás testimonios de madres que han elegido nuestro curso y han podido
                mejorar la alimentación de sus bebés!
            </p>
            <video src={video2} controls className="d-block w-75 mt-4" style={{margin: '0 auto'}}></video>
            <div style={{display: 'flex', alignItems:'end', margin: '0 auto',}} className='col-md-3 col-lg-3 col-xl-3  mx-auto mt-5  w-75'>
                <video src={video7} controls className="d-blockmt-4" style={{margin: '0 auto', width:'33%', height: '90%'}}></video>
                <video src={video15} controls className="d-block mt-4" style={{margin: '0 auto', width:'33%', height: "90%"}}></video>
                <video src={video11} controls className="d-block mt-4" style={{margin: '0 auto', width:'33%', height: "100%"}}></video>
            </div>
        </div>
    </>
  )
}

export default Testimonials