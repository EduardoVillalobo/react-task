import React from 'react'
import { ListGroup, Row, Col, Button, ButtonGroup, Badge } from 'react-bootstrap';

export default function Tarea({ tarea, onDelete, onComplete }) {

    return (
        <ListGroup.Item>
            <Row>
                <Col md="9">
                    <strong>{tarea.titulo} </strong> 
                    {tarea.completado 
                        ? <Badge bg="success">Completado</Badge>
                        : <Badge bg="primary">Sin Completar</Badge>
                    }
                    
                    <br />
                    <div className="text-muted">{tarea.descripcion}</div>
                    <small>{tarea.fecha}</small>
                </Col>
                <Col md="3">
                    <ButtonGroup vertical>
                        <Button className="btn-danger" onClick={() => onDelete(tarea.id)}>Eliminar</Button>
                        <Button className="btn-success" onClick={() => onComplete(tarea.id)}>Completado</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}
