import { extendObservable } from "mobx";

class StateStore {
	constructor(state = {}) {
		extendObservable(
			this,
			{
				user: {
					username: null,
					loggedIn: false
				},
				page: {
					title: null
				},
				event: {
					title: "",
					start: "",
					end: "",
					add: false
				}
			},
			state
		);
	}
}

export default new StateStore();

export { StateStore };
