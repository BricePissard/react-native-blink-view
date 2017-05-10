# react-native-blink-view [![Join the chat at https://gitter.im/RobbyAssistant](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/RobbyAssistant?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/6e8f99d4499f414b933528a5a7e739b0)](https://www.codacy.com/app/BricePissard/react-native-blink-view?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=BricePissard/react-native-blink-view&amp;utm_campaign=Badge_Grade) [![NPM version](https://badge.fury.io/js/react-native-blink-view.svg)](http://badge.fury.io/js/react-native-blink-view)[![npm downloads](https://img.shields.io/npm/dt/react-native-blink-view.svg?maxAge=2592000)](http://www.npmtrends.com/react-native-blink-view)[![CircleCI](https://circleci.com/gh/BricePissard/react-native-blink-view.svg?style=svg)](https://circleci.com/gh/BricePissard/react-native-blink-view)
[![Travis Badge](https://travis-ci.org/BricePissard/react-native-blink-view.svg?branch=master)]

[![NPM](https://nodei.co/npm/react-native-blink-view.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-native-blink-view/)

A Simple &lt;View> handler that allows a smooth blinking opacity animation.

## Installation
```sh
npm i --save react-native-blink-view
```

# Props
| name | desc | type | default
| --- | --- | --- | --- |
| `binking` | Is the element binking. | boolean | `true`
| `delay` | Delay of each blink in milliseconds.  | number | `1500`


## Usage
```javascript
import BlinkView from 'react-native-blink-view';

// Simple blinking button that blink every 2 sec.
render() {
  return (
    <BlinkView binking={this.state.isBlinking?true:false} delay={2000}>
      <Button onPress={e=>{}}>
        <Text>Hello World</Text>
      </Button>
    </BlinkView>
  );
}
```

### Screenshot
 ![Screenshot of the example](https://github.com/BricePissard/react-native-blink-view/blob/master/assets/img/loop.gif)


### Dependenies
 [react-timer-mixin](https://github.com/reactjs/react-timer-mixin)

### Development
PRs highly appreciated

License
----
GNU Public License
