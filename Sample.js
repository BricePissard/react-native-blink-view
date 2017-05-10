// Intro.js
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BlinkViewTest from './BlinkView';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});

export default class Intro extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
				<BlinkViewTest binking={true} delay={2000}>
					<Text style={styles.instructions}>
	          This is a React Native snapshot test.
	        </Text>
				</BlinkViewTest>
      </View>
    );
  }
}
