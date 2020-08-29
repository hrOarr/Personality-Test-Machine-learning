import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
import { connect } from 'react-redux';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import * as actions from '../../../js/redux/actions/index';

class Header extends React.Component{
    logout = () => {
      this.props.onAuthLogout();
    }  
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="/admin">TECHLEADER</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/about-us">Contact Us</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    </NavDropdown>
                                    </Nav>
                                    {
                                      this.props.isAuth? (
                                          <Nav.Link onClick={this.logout}>Logout</Nav.Link>
                                      ):(
                                      <Nav.Link href="/auth/login">Login</Nav.Link>
                                      )
                                    }
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            
                    </div>
                </div>
            </div>
        )  
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuthLogout: loginCred => 
        dispatch(actions.logout())
  };
};
 

export default connect(null,mapDispatchToProps)(Header);