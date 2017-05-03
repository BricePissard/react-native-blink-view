# react-native-blink-view
[![NPM version](https://badge.fury.io/js/react-native-blink-view.svg)](http://badge.fury.io/js/react-native-blink-view)

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
      <Button>
    </BlinkView>
  );
}
```

### Dependenies
 [react-timer-mixin](https://github.com/reactjs/react-timer-mixin)
### Development

PRs highly appreciated

License
----
GNU Public License
