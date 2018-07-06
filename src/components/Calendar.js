import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
	state = {
		events: []
	};

	componentWillMount() {}

	render() {
		return (
			<div>
				<BigCalendar
					defaultDate={new Date()}
					defaultView="month"
					events={this.state.events}
					style={{ height: "100vh" }}
				/>
			</div>
		);
	}
}

export default Calendar;
