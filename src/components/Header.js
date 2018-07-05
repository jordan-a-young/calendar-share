import React, { Component } from "react";

import { appStore, stateStore } from "../stores";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

@inject("appStore")
@observer
class Header extends Component {
	static propTypes = {
		appStore: PropTypes.shape({
			state: PropTypes.any
		})
	};

	render() {
		return <h1 className="text-center">{appStore.state.page.title}</h1>;
	}
}

export default Header;
