import { action } from "mobx";

const valueFromEvent = event => {
	if (event && event.target && typeof event.target.value !== "undefined") {
		return event.target.value;
	}
	return event;
};

class AppStore {
	constructor(state) {
		this.state = state;
	}

	@action
	setEventTitle = event => {
		this.state.event.title = valueFromEvent(event);
	};

	@action
	setEventStart = event => {
		this.state.event.start = valueFromEvent(event);
	};

	@action
	setEventEnd = event => {
		this.state.event.end = valueFromEvent(event);
	};

	@action
	setEventAdd = event => {
		this.state.event.add = valueFromEvent(event);
	};

	@action
	setEventAdd = () => {
		this.state.event.add = !this.state.event.add;
	};

	@action
	setLogin = () => {
		this.state.user.loggedIn = !this.state.user.loggedIn;
	};

	@action
	setLoginStatus = event => {
		this.state.user.loggedIn = valueFromEvent(event);
	};

	@action
	setPageTitle(title) {
		this.state.page.title = title;
	}

	@action
	setUsername = event => {
		this.state.user.username = valueFromEvent(event);
	};
}

export default AppStore;
