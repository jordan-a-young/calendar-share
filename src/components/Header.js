import React, { Component } from "react";
import { Button } from "reactstrap";
import { appStore, stateStore } from "../stores";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

@inject("appStore")
@observer
class Header extends Component {
	static propTypes = {
		appStore: PropTypes.shape({
			state: PropTypes.any
		})
	};

	handleSubmit = () => {
		const { appStore } = this.props;
		console.log(appStore.state);
	};

	handleLogout = () => {
		const { appStore } = this.props;
		appStore.setUsername(null);
		appStore.setLoginStatus(false);
		appStore.setEventAdd(false);
	};

	render() {
		return (
			<div className="text-center">
				<h1>{appStore.state.page.title}</h1>
				<span>
					<Button type="submit" className="m-1" onClick={this.handleSubmit}>
						Print
					</Button>
					<Button color="danger" onClick={this.handleLogout} className="m-2">
						Logout
					</Button>
				</span>
			</div>
		);
	}
}

export default Header;
