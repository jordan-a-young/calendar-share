import React, { Component } from "react";
import Calendar from "../components/Calendar";
import Header from "../components/Header";
import EventAdder from "../components/EventAdder";
import { Container } from "reactstrap";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

@inject("appStore")
@observer
class AddEvent extends Component {
	static propTypes = {
		appStore: PropTypes.shape({
			state: PropTypes.any
		})
	};

	componentWillMount() {
		const { appStore } = this.props;
		appStore.setPageTitle("Add an Event");
		console.log(appStore.state);
	}

	render() {
		return (
			<div>
				<Header />
				<Container>
					<EventAdder />
				</Container>
			</div>
		);
	}
}

export default AddEvent;
