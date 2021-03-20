import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="container">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/">Desh Rides</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/destination">Destination</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                    </Nav>
                    <Button variant="success" as={Link} to="/signin">{loggedInUser.userName || loggedInUser.email ? loggedInUser.userName || loggedInUser.email : "Login"}</Button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;