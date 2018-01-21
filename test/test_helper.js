import jsdom from 'jsdom';
import _$ from 'jquery';

import TestUtils from 'react-dom/test-utils';
import React from 'react';
import ReactDOM from 'react-dom';

import chai, { expect } from 'chai';
import { Provider } from 'react-redux'; // to make redux work
import { createStore } from 'redux';
import reducers from './../src/reducers';

import chaiJquery from 'chai-jquery';

// Simulating browser in cli
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = _$(global.window);

function renderComponent(ComponentClass, props, state) {
	const componentInstance = TestUtils.renderIntoDocument(
		<Provider store={createStore(reducers, state)}>
			<ComponentClass {...props} />
		</Provider>
	);

	return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML
}

$.fn.simulate = function(eventName, value) {
	if (value) {
		this.val(value);
	}

	TestUtils.Simulate[eventName](this[0]);
};

chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
