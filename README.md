# react-native-blink-view [![Join the chat at https://gitter.im/RobbyAssistant](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/RobbyAssistant?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/6e8f99d4499f414b933528a5a7e739b0)](https://www.codacy.com/app/BricePissard/react-native-blink-view?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=BricePissard/react-native-blink-view&amp;utm_campaign=Badge_Grade) [![NPM version](https://badge.fury.io/js/react-native-blink-view.svg)](http://badge.fury.io/js/react-native-blink-view) [![npm downloads](https://img.shields.io/npm/dt/react-native-blink-view.svg?maxAge=2592000)](http://www.npmtrends.com/react-native-blink-view)

[![NPM](https://nodei.co/npm/react-native-blink-view.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-native-blink-view/)

A Simple &lt;View /> handler that allows a smooth blinking opacity animation on any animatable &lt;Component />.

## Installation
```sh
react-native install react-native-blink-view
```

# Props
| name | desc | type | default
| --- | --- | --- | --- |
| `blinking` | Is the element blinking. | boolean | `true`
| `delay` | Delay of each blink in milliseconds.  | number | `1500`
| `element` | Blinking element type, can be 'View', 'Text' or any kind of <Element /> | Component | `View`


## Usage
```javascript
import BlinkView from 'react-native-blink-view'

// 1 - Blinking button that blink every 2 sec.
// 2 - Blinking word in a text.
render() {
  return (
    <View>

      <BlinkView blinking={this.state.isBlinking?true:false} delay={2000}>
        <Button onPress={e=>{}}>
          <Text>Now</Text>
        </Button>
      </BlinkView>

      <Text>
        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
        quae ab illo inventore <BlinkView element={Text}>veritatis</BlinkView>
        et quasi architecto beatae vitae dicta sunt...
      </Text>

    </View>
  )
}
```

### Screenshot
 ![Screenshot of the blinking View sample](https://github.com/BricePissard/react-native-blink-view/blob/master/assets/img/loop.gif)

 ![Screenshot of the example](https://github.com/BricePissard/react-native-blink-view/blob/master/assets/img/text.gif)

### Development
PRs highly appreciated

License
----
GNU Public License
