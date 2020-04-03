import React from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends React.Component{
    render(){
        return (
            <Navbar bg="light" variant="light" expand="lg">
                <Navbar.Brand href="#home">COVID-19 Dashboard</Navbar.Brand>
            </Navbar>
        )
    }
}

export default Header;