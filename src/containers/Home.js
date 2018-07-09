import React, { Component } from "react";
import Calendar from "../components/Calendar";
import Header from "../components/Header";
import AddEvent from "./AddEvent";
import Login from "./Login";
import { Button, Container } from "reactstrap";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

@inject("appStore")
@observer
class Home extends Component {
	static propTypes = {
		appStore: PropTypes.shape({
			state: PropTypes.any
		})
	};

	handleSubmit = () => {
		const { appStore } = this.props;
		appStore.toggleEventAdd();
	};

	handleLogout = () => {
		const { appStore } = this.props;
		appStore.setUsername(null);
		appStore.toggleLogin();
	};

	componentDidMount() {
		const { appStore } = this.props;
		appStore.setPageTitle("Home");
	}

	componentWillUpdate() {
		const { appStore } = this.props;
		appStore.setPageTitle("Home");
	}

	render() {
		const { appStore } = this.props;

		if (!appStore.state.user.loggedIn) return <Login />;

		if (appStore.state.event.add) return <AddEvent />;
		return (
			<div>
				<Header />
				<Container>
					<Calendar />
					<span className="m-2">
						<Button
							color="success"
							type="submit"
							className="m-2"
							onClick={this.handleSubmit}
						>
							Add Event
						</Button>
						<Button color="danger" onClick={this.handleLogout} className="m-2">
							Logout
						</Button>
					</span>
				</Container>
			</div>
		);
	}
}

export default Home;
