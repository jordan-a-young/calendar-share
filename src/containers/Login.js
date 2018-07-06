import React, { Component } from "react";
import { Col, Container } from "reactstrap";
import UserLogin from "../components/UserLogin";
import Header from "../components/Header";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

@inject("appStore")
@observer
class Login extends Component {
	static propTypes = {
		appStore: PropTypes.shape({
			state: PropTypes.any
		})
	};

	componentWillMount() {
		const { appStore } = this.props;
		appStore.setPageTitle("User Login");
	}

	render() {
		return (
			<div>
				<Header />
				<Container>
					<Col sm="6">
						<UserLogin />
					</Col>
				</Container>
			</div>
		);
	}
}

export default Login;
