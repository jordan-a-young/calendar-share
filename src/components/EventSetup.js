import React, { Component } from "react";
import { AvField, AvForm } from "availity-reactstrap-validation";
import { FormGroup, Button, Card, CardTitle, CardBody } from "reactstrap";
import { observer, inject } from "mobx-react";
import { DateTime } from "luxon";
import PropTypes from "prop-types";

@inject("appStore")
@observer
class EventSetup extends Component {
  static propTypes = {
    appStore: PropTypes.shape({
      state: PropTypes.any
    })
  };

  handleSubmit = (event, values) => {
    const { appStore } = this.props;
    appStore.setEventTitle(values.title);
    appStore.setEventStart(values.startDate);
    appStore.setEventEnd(values.endDate);

    appStore.setEventSetup(false);
  };

  handleReturn = () => {
    const { appStore } = this.props;
    appStore.setEventSetup(false);
  };

  handleReset = () => {
    this.form && this.form.reset();
  };

  render() {
    const { appStore } = this.props;
    return (
      <div>
        <Card>
          <CardBody>
            <AvForm
              id="searchForm"
              className="w-50"
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
                id="startDate"
                name="startDate"
                label="Event Start Date:"
                type="text"
                placeholder="Enter the event start date"
                defaultValue={appStore.state.event.start.toLocaleString()}
                className="w-50"
                required
              />
              <AvField
                id="startTime"
                name="startTime"
                label="Event Start Time:"
                type="text"
                placeholder="Enter the event start time"
                className="w-50"
                required
              />
              <AvField
                id="endDate"
                name="endDate"
                label="Event End Date:"
                type="text"
                placeholder="Enter the event end date"
                defaultValue={appStore.state.event.start.toLocaleString()}
                className="w-50"
                required
              />
              <AvField
                id="endTime"
                name="endTime"
                label="Event End Time:"
                type="text"
                placeholder="Enter the event end time"
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

export default EventSetup;
