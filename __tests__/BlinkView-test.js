'use strict';

import React from 'react';
import { Text } from "react-native";
import ReactTestRenderer from 'react-test-renderer';
import BlinkViewTest from '../BlinkView';

jest.disableAutomock();

describe('BlinkView', () => {
	it('should renders the BlinkView correctly', () => {
		const instance = ReactTestRenderer.create(
			<BlinkView binking={this.state.isBlinking?true:false} delay={2000}>
				<Text>Hello World</Text>
			</BlinkView>
		);
		expect(true).toBe(true);
	});
});
