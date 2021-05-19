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
import {
  CircleComponent,
  ErrorBoundary,
  PlotBoilerplateComponent,
  LineComponent,
  VectorComponent,
  VertexComponent
} from 'plotboilerplate-react';
import { PlotBoilerplateProvider } from 'plotboilerplate-react';
import { Vertex } from 'plotboilerplate';

const App = () => {
  return (
    <PlotBoilerplateProvider>
      <ErrorBoundary>
        <PlotBoilerplateComponent fullSize={true} enableTouch={true} />
        <LineComponent a={new Vertex(-100, -100)} b={new Vertex(100, 100)} />
        <VertexComponent x={-100} y={0} />
        <VertexComponent x={100} y={0} />
        <VectorComponent a={new Vertex(-100, 100)} b={new Vertex(100, -100)} />
        <CircleComponent center={new Vertex(0, 0)} radius={50} />
      </ErrorBoundary>
    </PlotBoilerplateProvider>
  );
};

export default App;
```

![Screenshot](screenshot.png 'Screenshot')

## Compile

```bash
npm run build
```

## Compile (dev)

```bash
npm run start
```

## Run Example

```bash
cd example
npm run start
```

### Re-install updated package only after built

```bash
cd example
npm i plotboilerplate-react @types/plotboilerplate-react
```

### Todos:

- How should I compile my raw Typescript files (from plotboilerplate) so React can find the declaration files?
- Transport following classes into react components: Ellipse, CircleArc, EllipticArc, Polygon, CubicBezierCurve, BezierPath, Triangle.

## License

MIT © [ikaroskappler](https://github.com/ikaroskappler)

### Credits

Credits to ananthakumaran for the emacs-tsx-mode 'tide' https://github.com/ananthakumaran/tide
Great work!
