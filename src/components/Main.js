import React, { useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';

import Formulario from './Formulario';
import Listado from './Listado';


export default function Main() {


    const [listado, setListado] = useState([])

    const onGuardar = (titulo, descripcion, fecha, completado) => {
        setListado([...listado, {
            id: uuidv4(),
            titulo,
            descripcion,
            fecha,
            completado: completado
        }])
    }

    const onDelete = (id) => {
        setListado(listado.filter((tarea) => tarea.id !== id))
    }

    const onComplete = (id) => {
        setListado(listado.map((tarea) =>
            tarea.id === id 
                ? {...tarea, completado:!tarea.completado}
                : tarea
        ))
    }


    return (
        <Container>
            <br />
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Alert variant="primary">
                        Administrador de tareas
                    </Alert>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <Formulario onGuardar={onGuardar} />
                </Col>
                <Col>
                    <Listado listado={listado} onDelete={onDelete} onComplete={onComplete} />
                </Col>
            </Row>
        </Container>
    )
}
