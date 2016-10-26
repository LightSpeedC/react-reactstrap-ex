'use strict';

import React from 'react';
import {render} from 'react-dom';
import 'regenerator-runtime/runtime';

window.ReactTransitionGroup = require('react/lib/ReactTransitionGroup');
window.ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');

// Needed for onTouchTap http://stackoverflow.com/a/34015469/988941
//require('react-tap-event-plugin')();

import AppHeader from './app-header';
import AppFooter from './app-footer';
import AppCenter from './app-center';

const MyAwesomeReactComponent = props =>
	<div>
		<AppHeader />
		<AppCenter />
		<p>test p</p>
		<AppFooter />
	</div>;

const App = props =>
	<MyAwesomeReactComponent />;

render(<App />, document.getElementById('app'));
