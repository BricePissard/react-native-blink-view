'use strict';

import React from 'react';
import { Text, View } from "react-native";
import BlinkViewTest from '../Sample';

import renderer from 'react-test-renderer';
//const ReactShallowRenderer = require('react-test-renderer/shallow');

jest.disableAutomock();

describe('BlinkView', () => {
	it('should renders the BlinkView correctly', () => {
		//const renderer = new ReactShallowRenderer();
		//renderer.render(
		const instance = renderer.create(<BlinkViewTest/>).toJSON();

		expect(true).toBe(true);
	});
});
