pick-react-known-prop
=====================

Picks only known React DOM props (attributes) from passed object, filters unknown [[?]](https://facebook.github.io/react/warnings/unknown-prop.html "Unknown props")

```js
import {pickHTMLProps, pickSVGProps} from 'pick-react-known-prop'

//...
return <div {...pickHTMLProps(props)} />
return <path {...pickSVGProps(props)} />
```
