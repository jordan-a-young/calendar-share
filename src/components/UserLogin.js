import React, { Component } from "react";
import { AvField, AvForm } from "availity-reactstrap-validation";
import { FormGroup, Button, Card, CardBody } from "reactstrap";
import { Redirect } from "react-router-dom";
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

	handleSubmit = (event, values) => {
		const { appStore } = this.props;
		appStore.setUsername(values.user);
		appStore.toggleLogin();
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
								id="user"
								name="user"
								label="User ID: "
								type="text"
								placeholder="Enter Your User Id"
								className="w-50"
								required
							/>
							<FormGroup>
								<Button type="submit" color="success" className="m-1">
									Login
								</Button>
								<Button
									type="reset"
									color="danger"
									onClick={this.handleReset}
									className="m-1"
								>
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
