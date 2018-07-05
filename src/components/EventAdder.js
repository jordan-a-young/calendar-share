import React, { Component } from "react";
import { AvField, AvForm } from "availity-reactstrap-validation";
import { FormGroup, Button, Card, CardTitle, CardBody } from "reactstrap";
import { Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

@inject("appStore")
@observer
class UserLogin extends Component {
	state = {
		submitted: false
	};

	static propTypes = {
		appStore: PropTypes.shape({
			state: PropTypes.any
		})
	};

	handleChange = (event, values) => {
		const { appStore } = this.props;
		appStore.setEventTitle(values.title);
		appStore.setEventStart(values.start);
		appStore.setEventEnd(values.end);
	};

	handleSubmit = event => {
		this.setState({ submitted: !this.state.submitted });
	};

	handleReset = () => {
		this.form && this.form.reset();
	};

	render() {
		if (this.state.submitted) return <Redirect to="/Home" />;
		return (
			<div>
				<Card>
					<CardBody>
						<AvForm
							id="searchForm"
							onValidSubmit={this.handleSubmit}
							onReset={this.handleReset}
							ref={c => (this.form = c)}
						>
							<AvField
								id="title"
								name="title"
								label="Event Title:"
								type="text"
								placeholder="Enter the event title"
								onChange={this.handleChange}
								className="w-75"
								required
							/>
							<AvField
								id="start"
								name="start"
								label="Event Start:"
								type="text"
								placeholder="Enter the event start date"
								onChange={this.handleChange}
								className="w-75"
								required
							/>
							<AvField
								id="end"
								name="end"
								label="Event End:"
								type="text"
								placeholder="Enter the event end date"
								onChange={this.handleChange}
								className="w-75"
								required
							/>
							<FormGroup>
								<Button type="submit" color="success">
									Submit
								</Button>{" "}
								<Button type="reset" color="danger" onClick={this.handleReset}>
									Clear
								</Button>
							</FormGroup>
						</AvForm>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default UserLogin;
