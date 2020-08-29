import React, { Component } from 'react';

import Header from './helpers/header';
import Auxx from '../../hoc/Auxx/auxx';
import { Route, Switch, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Row, Col, Button } from 'reactstrap';

class Admin extends Component{
	render(){
		return (
			<Auxx>
			<Header isAuth={this.props.isAuth} />

			<Container>
			   <h1 className="text-center">Admin Panel</h1>
			   <Row>
			      <Col sm="4">
			      <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/admin/user-list"
                       >
			         <Button>View All The Users</Button>
			       </Link>
			      </Col>
			      <Col sm="4">
			         <Button>View All Articles</Button>
			      </Col>
			      <Col sm="4">
			         <Button>Create new article</Button>
			      </Col>
			   </Row> 
			</Container>
			</Auxx>
		);
	}
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null
    };
};

export default connect(mapStateToProps,null)(Admin);