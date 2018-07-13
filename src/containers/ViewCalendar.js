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
	}

	componentWillUpdate() {
		const { appStore } = this.props;
		appStore.setPageTitle("Home");
	}

	handleSubmit = () => {
		const { appStore } = this.props;
		appStore.setEventAdd(true);
	};

	render() {
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
					</span>
				</Container>
			</div>
		);
	}
}

export default Home;
