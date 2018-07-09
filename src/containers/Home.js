import React, { Component } from "react";
import Calendar from "../components/Calendar";
import Header from "../components/Header";
import ViewCalendar from "./ViewCalendar";
import AddEvent from "./AddEvent";
import Login from "./Login";
import { Container } from "reactstrap";
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
		appStore.setEventAdd(true);
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
				<Container>
					<ViewCalendar />
				</Container>
			</div>
		);
	}
}

export default Home;
