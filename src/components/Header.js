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

	render() {
		return (
			<div>
				<h1 className="text-center">{appStore.state.page.title}</h1>
				<Button
					type="submit"
					className="align-center"
					onClick={this.handleSubmit}
				>
					Print
				</Button>
			</div>
		);
	}
}

export default Header;
