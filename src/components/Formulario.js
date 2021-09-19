import React, { useState } from 'react';
import {Card, Form, Button} from 'react-bootstrap'

export default function Formulario({onGuardar}) {


    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha, setFecha] = useState('');
    const [completado, setCompletado] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault()
        

        if(titulo!=='' && fecha!==''){
            
            onGuardar(titulo, descripcion, fecha, completado);

            setTitulo('');
            setDescripcion('');
            setFecha('');
            setCompletado(false);           

        }else{
            alert("Debe colocar un titulo")
        }
        
        
    }


    const onCompletado = (e) =>{
        setCompletado(e)
    }


    return (
        <Card className="p-3">
            <Card.Title>
                Escriba una tarea para hacer
            </Card.Title>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formTitulo">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control type="text" onChange={(e)=>setTitulo(e.target.value)} value={titulo}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDescripcion">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control type="text" onChange={(e)=>setDescripcion(e.target.value)} value={descripcion}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formFecha">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control type="date" onChange={(e)=>setFecha(e.target.value)} value={fecha}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Completado" onChange={(e)=>onCompletado(e.currentTarget.checked)} checked={completado}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(e)=>onSubmit(e)}>
                        Guardar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
