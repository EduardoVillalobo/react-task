import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import Tarea from './Tarea';

export default function Listado({listado, onDelete, onComplete}) {
 
    return (
        <Card className="p-3">
            <Card.Title>
                Listado de Tareas para completar
            </Card.Title>
            <Card.Body>
                <ListGroup>
                    {
                        listado.map((item, index) => (
                            <Tarea key={index} tarea={item} onDelete={onDelete} onComplete={onComplete}/>
                        ))
                    }

                </ListGroup>
            </Card.Body>
        </Card>
    )
}
