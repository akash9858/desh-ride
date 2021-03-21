import { Button } from 'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Destination.css'
import Location from '../Map/Location';

const Destination = () => {
    document.title = "Destination"
    return (
        <div className="container">
            <div className="main-content">
                <div className="text">
                    <Form>
                        <Form.Group controlId="formBasicStart">
                            <Form.Label>Pick Form</Form.Label>
                            <Form.Control type="text" name="startForm" placeholder="Mirpur" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEnd">
                            <Form.Label>Pick To</Form.Label>
                            <Form.Control type="text" name="journyEnd" placeholder="Gulshan" />
                        </Form.Group>
                    </Form>
                    <Button className="mb-3" as={Link} to="/finalDestination" variant="primary"> Search</Button>
                </div>
                <div className="image">
                    {/* <img className="image" src={map} alt="" /> */}
                    <Location></Location>
                </div>

            </div>
        </div>
    );
};

export default Destination;