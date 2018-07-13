import React, { Component } from "react";
import Header from "../components/Header";
import EventSetup from "../components/EventSetup";
import { Container } from "reactstrap";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

@inject("appStore")
@observer
class AddEvent extends Component {
  static propTypes = {
    appStore: PropTypes.shape({
      state: PropTypes.any
    })
  };

  componentWillMount() {
    const { appStore } = this.props;
    appStore.setPageTitle("Event Setup");
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
          <EventSetup />
        </Container>
      </div>
    );
  }
}

export default AddEvent;
