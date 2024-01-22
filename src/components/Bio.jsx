import React, { Fragment } from 'react'
import bg5 from '../assets/bg/bg5.jpg'
import { Container, Button } from 'react-bootstrap'
function Bio() {
    return (
        <>
            <Container className='mt-4'>
                <h2 className='text-center text-primary' style={{ fontWeight: 700 }}>Biografía</h2>
                <hr />
                <div className='container d-flex justify-content-between mt-4' style={{ width: '80%', flexWrap: 'wrap', gap: '1em' }}>
                    <div className='col d-flex flex-column'>
                        <div id='profile' style={{ margin: '0 auto' }}></div>
                        <span style={{ fontSize: '2.3em', margin: '0 auto' }}>Citlalli Moctezuma</span>
                    </div>
                    <div className='col'>
                        <p>
                            <strong>Health Coach</strong> Certificada por el IIN (Institute for Integrative Nutrition de Nueva York).
                            Su misma experiencia con su hijo, la llevó a especializarse en el acompañamiento de nuevas madres,
                            empezando por la alimentación durante el embarazo, y después el parto y la lactancia. Participa
                            de círculos de lactancia entre madres, acompañando a cientos de mamás durante esta bella pero retadora etapa.
                        </p>
                        <p>
                            Después, al notar que otras mujeres estaban teniendo muchos retos con el inicio de la alimentación complementaria
                            al igual que ella los tuvo, comienza a impartir talleres sobre Alimentación Complementaria con el Método Baby
                            Led Weaning. Después de varios años de observar a los bebés y sus familias, logra desarrollar un método propio
                            llamado “Tu Bebé Puede Comer Solo”, cuyo éxito radica en la adaptación del método al bebé y no del bebé al
                            método, y también en la simplificación de la nutrición.
                        </p>
                        <p>Ha impartido conferencias ante el Departamento de Pediatría de la Caja Nacional de Salud en la Ciudad de
                            Santa Cruz, Bolivia en 2018 para la actualización de las recomendaciones en alimentación complementaria,
                            y también en la Universidad Autónoma de Nuevo León en México, durante la Semana de la Salud en 2019 para
                            la actualización en la alimentación infantil para todas las docentes con hijos de esa universidad.
                        </p>
                        <p>Atiende a decenas de familias en su consulta privada, con la gran satisfacción de ver día con día,
                            a más y más bebés comiendo libres y felices
                        </p>
                    </div>
                </div>
            </Container>
            <hr className='w-75' style={{margin: '0 auto'}} />
        </>
    )
}

export default Bio