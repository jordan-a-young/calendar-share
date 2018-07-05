import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "mobx-react";
import { configure } from "mobx";
import { appStore, stateStore } from "../stores";
import Home from "../containers/Home";
import Login from "../containers/Login";
import AddEvent from "../containers/AddEvent";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const stores = { appStore, stateStore };
window.stateStore = stateStore;
configure({ enforceActions: true });

const App = () => (
	<Provider {...stores}>
		<BrowserRouter basename="/">
			<div>
				<Switch>
					<Route exact path="/" component={Login} />
					<Route path="/Home" component={Home} />
					<Route path="/AddEvent" component={AddEvent} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
);

export default App;
