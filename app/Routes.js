import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Base from './components/Base';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';

export default (
	<Route path="/" component={Base}>
		<IndexRoute component={Home}/>
		<Route path="/resume" component={Resume}/>
		<Route path="/about" component={About}/>
		<Route path="/contact" component={Contact}/>
	</Route>
);

