# plotboilerplate-react

Approach to create a React component from the plotboilerplate library.
Note: this implementation is unfinished.


> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/plotboilerplate-react.svg)](https://www.npmjs.com/package/plotboilerplate-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save plotboilerplate-react
```

## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from 'plotboilerplate-react'
import 'plotboilerplate-react/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## Compile
```bash
npm run build
```

## Compile (dev)
```bash
npm run start
```


## Run styleguide
```bash
npm run styleguide
```

## License

MIT © [ikaroskappler](https://github.com/ikaroskappler)


### Credits
Credits to ananthakumaran for the emacs-tsx-mode 'tide' https://github.com/ananthakumaran/tide
Great work!