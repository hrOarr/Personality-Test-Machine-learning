import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    NavLink
  } from "react-router-dom";
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Navbar,Nav,NavDropdown,Form,FormControl } from 'react-bootstrap';
import { UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import './header.css';
import Logo from './Logo.jpg';

class Header extends React.Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                            <Navbar light expand="lg" sticky="top">
                                <Navbar.Brand className="brand" href="/" style={{fontSize: '36px', fontWeight: '500'}}><img width="50" height="50" src={Logo} alt={"Logo"} />TECHLEADER</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                  <Nav className="ml-auto">
                                  <UncontrolledDropdown nav inNavbar>
                                  <DropdownToggle style={{ color: 'black' }} nav>
                                     <Button>Test Yourself</Button>
                                  </DropdownToggle>
                                  <DropdownMenu right>
                                  <DropdownItem href="/personality_test/questions/">
                                      Personality Test(Questions)
                                  </DropdownItem>
                                  <DropdownItem href="/personality_test/text/">
                                      Personality Test(Text)
                                  </DropdownItem>
                                  </DropdownMenu>
                                  </UncontrolledDropdown>
                                  <Nav.Link href="/articles" style={{color: 'black'}}><Button>Articles</Button></Nav.Link>
                                  <Nav.Link href="/about-us" style={{color: 'black'}}><Button>About Us</Button></Nav.Link>
                                  </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                    </div>
                </div>
            </div>
        );  
    }
}
 
export default Header;