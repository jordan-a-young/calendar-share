import React, { Component } from "react";
import ViewCalendar from "./ViewCalendar";
import EventSetup from "../components/EventSetup";
import Login from "./Login";
import { Container } from "reactstrap";
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

  render() {
    const { appStore } = this.props;

    if (!appStore.state.user.loggedIn) return <Login />;
    if (appStore.state.event.setup) return <EventSetup />;

    return (
      <Container>
        <ViewCalendar />
      </Container>
    );
  }
}

export default Home;
