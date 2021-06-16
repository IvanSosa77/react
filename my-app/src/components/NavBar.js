import React from 'react'
import {Navbar} from 'react-bootstrap'


export default function NavBar(props) {
    return (
        <Navbar bg="light">
        <Navbar.Brand href="#home">Cards-Market</Navbar.Brand>
        <Navbar.Brand href="#About">About</Navbar.Brand>
        <Navbar.Brand href="#Contact">Contact</Navbar.Brand>
        <Navbar.Brand href="#home">
      <img
        src={props.image}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
      </Navbar>
    )
} 