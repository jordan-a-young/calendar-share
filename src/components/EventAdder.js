import React, { Component } from "react";
import { AvField, AvForm } from "availity-reactstrap-validation";
import { FormGroup, Button, Card, CardTitle, CardBody } from "reactstrap";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

@inject("appStore")
@observer
class UserLogin extends Component {
	static propTypes = {
		appStore: PropTypes.shape({
			state: PropTypes.any
		})
	};

	// handleChange = (event, values) => {
	// 	const { appStore } = this.props;
	// 	console.log(values);
	// 	appStore.setEventTitle(values.title);
	// 	appStore.setEventStart(values.start);
	// 	appStore.setEventEnd(values.end);
	// };

	handleSubmit = (event, values) => {
		const { appStore } = this.props;
		appStore.setEventTitle(values.title);
		appStore.setEventStart(values.start);
		appStore.setEventEnd(values.end);
		appStore.toggleEventAdd();
	};

	handleReturn = () => {
		const { appStore } = this.props;
		appStore.toggleEventAdd();
	};

	handleReset = () => {
		this.form && this.form.reset();
	};

	render() {
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
								className="w-50"
								required
							/>
							<AvField
								id="start"
								name="start"
								label="Event Start:"
								type="text"
								placeholder="Enter the event start date"
								className="w-50"
								required
							/>
							<AvField
								id="end"
								name="end"
								label="Event End:"
								type="text"
								placeholder="Enter the event end date"
								className="w-50"
								required
							/>
							<FormGroup>
								<Button type="submit" color="success" className="m-1">
									Submit
								</Button>
								<Button
									type="reset"
									color="danger"
									onClick={this.handleReset}
									className="m-1"
								>
									Clear
								</Button>
								<Button
									color="info"
									onClick={this.handleReturn}
									className="m-1"
								>
									Return
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
