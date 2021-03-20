import { Card, Button } from 'react-bootstrap';
import React from 'react';
import './RideDesign.css'
import { Link } from 'react-router-dom';

const Ride = (props) => {
    const { name, image } = props.card;
    return (

        <Card as={Link} to="/destination" className="cardStyle shadow-sm p-2 bg-body rounded container " style={{ width: '14rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Button as={Link} to="/destination" variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

    );
};

export default Ride
    ;