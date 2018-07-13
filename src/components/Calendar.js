import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
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
        start: moment(),
        end: moment().add(1, "days"),
        title: "This is an event"
      }
    ],
    selected: null
  };

  handleSelect = event => {
    const { appStore } = this.props;
    console.log(
      `selected slot: \n\nstart ${event.start} ` +
        `\nend: ${event.end.toLocaleString()}` +
        `\naction: ${event.action}`
    );
    appStore.setEventStart(event.start.toLocaleString());
    appStore.setEventEnd(event.start.toLocaleString());
    appStore.setEventSetup(true);
  };

  render() {
    let date = moment("12/12/1912");
    console.log(date);
    console.log(date.format("M/DD/YYYY"));
    console.log(moment().format("M/DD/YYYY"));
    return (
      <BigCalendar
        defaultDate={new Date()}
        defaultView="month"
        events={this.state.events}
        style={{ height: "100vh" }}
        selectable={true}
        onSelectEvent={event => this.handleSelect(event)}
        onSelectSlot={event => this.handleSelect(event)}
        selected={this.state.selected}
      />
    );
  }
}

export default Calendar;
