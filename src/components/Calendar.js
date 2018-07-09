import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import AddEvent from "../containers/AddEvent";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

BigCalendar.momentLocalizer(moment);

@inject("appStore")
@observer
class Calendar extends Component {
	static propTypes = {
		appStore: PropTypes.shape({
			state: PropTypes.any
		})
	};

	state = {
		events: [
			{
				start: new Date(),
				end: new Date(moment().add(1, "days")),
				title: "This is an event"
			}
		],
		selected: null,
		popoverOpen: false
	};

	toggle() {
		this.setState({
			popoverOpen: !this.state.popoverOpen
		});
	}

	handleSelect = slotInfo => {
		console.log(
			`selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
				`\nend: ${slotInfo.end.toLocaleString()}` +
				`\naction: ${slotInfo.action}`
		);
	};

	render() {
		console.log(this.state);
		// const { appStore } = this.props;

		// if (appStore.state.event.add) return <AddEvent />;
		if (this.state.selected) return <AddEvent />;

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
						this.setState({ selected: slotInfo });
						this.handleSelect(slotInfo);
					}}
					selected={this.state.selected}
				/>
			</div>
		);
	}
}

export default Calendar;
