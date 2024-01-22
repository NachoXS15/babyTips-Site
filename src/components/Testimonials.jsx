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
        <div className='w-75 mb-4' style={{margin: '0 auto'}} id='testimonios'>
            <h2 className='text-center text-primary' style={{fontWeight: 700}}>Testimonios</h2>
            <p className='text-center' style={{ fontSize: "1.2em" }}>Aquí encontrarás testimonios de madres que han elegido nuestro curso y han logardo
                mejorar la alimentación de sus bebés!
            </p>
            <video src={video2} controls className="d-block w-75 mt-4" style={{margin: '0 auto'}}></video>
            <div id='babysTest'>
                <video src={video7} controls  className='babyVideo'></video>
                <video src={video15} controls className='babyVideo'></video>
                <video src={video11} controls className='babyVideo'></video>
            </div>
        </div>
    </>
  )
}

export default Testimonials