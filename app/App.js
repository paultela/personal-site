import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';

export default class App extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={Home}/>
				<Route path="/resume" component={Resume}/>
				<Route path="/about" component={About}/>
				<Route path="/contact" component={Contact}/>
			</Router>
		);
	}
}
