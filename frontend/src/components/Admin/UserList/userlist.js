import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Auxx from '../../../hoc/Auxx/auxx';
import axios from 'axios';
import * as actions from '../../../js/redux/actions/index';
import Preloader from '../../helpers/preloader';
import { Button, Table, Container, Card } from 'reactstrap';

class UserList extends Component {
	getUsersList = () => {
		const config = {
			headers: {
				"Content-Type": "application/json",
				AUTHORIZATION: "JWT " + this.props.token
			}
		};
		console.log(config)
		this.props.onAdminUserListView(config);
	}

	componentDidMount(){
		this.getUsersList();
	}
	componenetWillMount(){
		this.getUsersList();
	}

	userDeleteHandler(userPk){

        const config = {
            headers: {
                "Content-Type": "application/json",
                AUTHORIZATION: "JWT " + this.props.token
            },
            data: {
                pk: userPk
            }
        };

        let confirmation = window.confirm("Do You Want To Delete This User?");

        if (confirmation) {
            axios.delete("/admin-panel/users/detail/", config)
                .then(response => {
                    alert("User Deleted");
                    this.getUsersList();
                })
                .catch(error => {
                    alert("Something Went Wrong");
                });
        }
    };

    render() {
        let userList = null;
        console.log(this.props.loading)
        if (this.props.userList) {
            userList = this.props.userList.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    {user.is_active ? (
                        <td style={{ color: "green" }}>Active</td>
                    ) : (
                        <td style={{ color: "red" }}>Not Active</td>
                    )}
                    <td>
                        <div>
                            <Link to={"/admin-panel/users/detail/" + user.id}>
                                <Button>Edit</Button>
                            </Link>
                        </div>
                        <Button
                            onClick={() => this.userDeleteHandler(user.id)}
                            style={{ color: "red" }}
                        >
                            Delete
                        </Button>
                    </td>
                </tr>
            ));
        }

        let userListTable = <Preloader />;

        if (!this.props.loading && this.props.userList) {
            userListTable = (
                <Container>
                   <div className="row">
                     <div className="col-md-12">
                      <Table bordered hover style={{ backgroundColor: "white" }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>{userList}</tbody>
                      </Table>
                     </div>
                    </div>
                </Container>
            );
        }

        return (
            <Auxx>
                <h2 style={{ textAlign: "center" }}>Users List</h2>
                <div>{this.props.userList ? userListTable : null}</div>
            </Auxx>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userList: state.admin.userList,
        loading: state.admin.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAdminUserListView: config =>
            dispatch(actions.adminUserListView(config))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);