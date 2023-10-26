import React from "react";
import { Card } from "react-bootstrap";

export default function Module({ title, desc, url }) {
    return (
        <>
            
                <Card className="bg-secondary text-secondary w-100 mb-4">
                    <Card.Body className="text-dark">
                        <Card.Title className="text-decoration-underline">
                            Modulo 1:
                        </Card.Title>
                        <Card.Text className="text-start">
                            <ul style={{listStyle: 'none', paddingLeft: '0'}}>
                                <li>Video 1 - ¡Bienvenidos!</li>
                                <li>Video 2 - Alimentación Complementaria.</li>
                                <li>Video 3 - Resumen del Programa.</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            
            
                <Card className="bg-secondary text-secondary w-100 mb-4">
                    <Card.Body className="text-dark">
                        <Card.Title className="text-decoration-underline">
                            Modulo 2:
                        </Card.Title>
                        <Card.Text className="text-start p-0">
                            <ul style={{listStyle: 'none', paddingLeft: '0'}}>
                                <li>Video 1 - ¿Cuándo puedo iniciar la Alimentación Complementaria?</li>
                                <li>Video 2 - Papel de la Leche Materna y Leche de fórmula.</li>
                                <li>Video 3 - Recomendaciones cuando inicias la AC.</li>
                                <li>Video 4 - Acciones a aplicar si tu bebé no muestra interés en comer.</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            
            
                <Card className="bg-secondary text-secondary w-100 mb-4">
                    <Card.Body className="text-dark">
                        <Card.Title className="text-decoration-underline">
                            Modulo 3:
                        </Card.Title>
                        <Card.Text className="text-start">
                            <ul style={{listStyle: 'none', paddingLeft: '0'}}>
                                <li>Video 1 - ¿Cómo se si mi bebé come suficiente?</li>
                                <li>Video 2 - Cantidades y Frecuencias.</li>
                                <li>Video 3 - Atoramiento y Ahogamiento.</li>
                                <li>Video 4 - Manejo de Alergias.</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            
            
                <Card className="bg-secondary text-secondary w-100 mb-4">
                    <Card.Body className="text-dark">
                        <Card.Title className="text-decoration-underline">
                            Modulo 4:
                        </Card.Title>
                        <Card.Text className="text-start">
                            <ul style={{listStyle: 'none', paddingLeft: '0'}}>
                                <li>Video 1 - Guía de Alimentos prohibidos.</li>
                                <li>Video 2 - Agua y otras bebidas.</li>
                                <li>Video 3 - Nutrición por grupos de alimentos.</li>
                                <li>Video 4 - Sal y Azúcar.</li>
                                <li>Video 5 - Vegetarianismo.</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            
            
                <Card className="bg-secondary text-secondary w-100 mb-4">
                    <Card.Body className="text-dark">
                        <Card.Title className="text-decoration-underline">
                            Modulo 5:
                        </Card.Title>
                        <Card.Text className="text-start">
                            <ul style={{listStyle: 'none', paddingLeft: '0'}}>
                                <li>Video 1 - Menú para las primeras 4 semanas.</li>
                                <li>Video 2 - Pongamos manos a la obra.</li>
                                <li>Video 3 - Cortar y cocinar verduras al vapor.</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            
            
                <Card className="bg-secondary text-secondary w-100 mb-4">
                    <Card.Body className="text-dark">
                        <Card.Title className="text-decoration-underline">
                            Modulo 6:
                        </Card.Title>
                        <Card.Text className="text-start">
                            <ul style={{listStyle: 'none', paddingLeft: '0'}}>
                                <li>Preguntas frecuentes a resolver</li>
                                <li>¿Cómo preparar recetas tanto basicas y avanzadas?: Tutoriales</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="bg-secondary text-secondary w-100 mb-4">
                    <Card.Body className="text-dark">
                        <Card.Title className="text-decoration-underline">
                            Bonos:
                        </Card.Title>
                        <Card.Text className="text-start">
                            <ul style={{listStyle: 'none', paddingLeft: '0'}}>
                                <li>Video 1 - Transición al Método en 3 sencillos pasos</li>
                                <li>Video 2 - ¿Cómo elijo una silla de comer para mi bebé?.</li>
                                <li>Video 3 - Utensilios de cocina top 10.</li>
                                <li>Video 4 - ¿Cómo elegir platos y vasos?.</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <hr className="mt-4" />
        </>
    );
}
