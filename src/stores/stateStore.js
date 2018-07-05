import { extendObservable } from "mobx";

class StateStore {
	constructor(state = {}) {
		extendObservable(
			this,
			{
				user: {
					username: null
				},
				page: {
					title: null
				}
			},
			state
		);
	}
}

export default new StateStore();

export { StateStore };
