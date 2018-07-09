import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
	state = {
		events: [
			{
				start: new Date(),
				end: new Date(moment().add(1, "days")),
				title: "This is an event"
			}
		],
		selected: ""
	};

	componentWillMount() {}

	handleSelect = slotInfo => {
		console.log(slotInfo);
	};

	render() {
		console.log(this.state);
		return (
			<div>
				<BigCalendar
					defaultDate={new Date()}
					defaultView="month"
					events={this.state.events}
					style={{ height: "100vh" }}
					selectable={true}
					onSelectEvent={event => alert(event.title)}
					onSelectSlot={slotInfo => {
						alert(
							`selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
								`\nend: ${slotInfo.end.toLocaleString()}` +
								`\naction: ${slotInfo.action}`
						);
						this.setState({ selected: slotInfo });
					}}
				/>
			</div>
		);
	}
}

export default Calendar;
