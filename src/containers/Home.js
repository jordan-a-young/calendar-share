import React, { Component } from "react";
import Calendar from "../components/Calendar";
import Header from "../components/Header";
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

	componentWillMount() {
		const { appStore } = this.props;
		appStore.setPageTitle("Home");
		console.log(appStore.state);
	}

	render() {
		return (
			<div>
				<Header />
				<Container>
					<Calendar />
					<span className="m-2">
						<Button color="success" tag="a" href="/AddEvent" className="m-2">
							Add Event
						</Button>
						<Button color="danger" tag="a" href="/" className="m-2">
							Return to Login
						</Button>
					</span>
				</Container>
			</div>
		);
	}
}

export default Home;
