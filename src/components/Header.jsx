import React from 'react'
import { Col, InputGroup, Form, Button } from 'react-bootstrap'
import "../index.css"




const Header = ({ handleTodo, todo, addItem }) => {
    const handleAddItem = (e) => {
        e.preventDefault();
        addItem(todo);
    };

    return (
        <div className='text-danger w-100'>


            <h1 className='text-danger text-center'>My Task(s)</h1>

            <Col className='container-fluid'>
                <Form className='gap-2' onSubmit={handleAddItem}>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="My Task(s)?"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            onChange={handleTodo}
                            value={todo}
                        />
                        <Button

                            type='submit' variant="primary" id="button-addon2" className='input-group-text bg-success btn btn-primary'>
                            Add
                        </Button>
                    </InputGroup>
                </Form>
            </Col>
        </div>
    )
}

export default Header