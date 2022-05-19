import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

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

            <div className="nav-container">
                <Form className="d-flex search-bar">
                    <FormControl
                        type="search"
                        placeholder="Search Reddit"
                        className="me-2"
                        aria-label="Search"
                    />
                </Form>

                <button type='button' className="account-btn login-btn">Log In</button>
                <button type='button' className="account-btn signup-btn">Sign Up</button>
            </div>
        </Navbar>
    )
}

export default NavigationBar
