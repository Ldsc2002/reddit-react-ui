import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'

function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand href="#">
                <img
                    alt=""
                    src="./src/images/logo.svg"
                    height="32"
                    className="d-inline-block align-top"
                />
                {' '}
            </Navbar.Brand>

            <div className='nav-container'>
                <Form className="d-flex search-bar">
                    <FormControl
                        type="search"
                        placeholder="Search Reddit"
                        className="me-2"
                        aria-label="Search"
                    />
                </Form>

                <button className='account-btn login-btn'>Log In</button>
                <button className='account-btn signup-btn'>Sign Up</button>
            </div>
        </Navbar>
    )
}

export default NavigationBar
