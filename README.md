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
  CircleSectorComponent,
  ErrorBoundary,
  PlotBoilerplateComponent,
  LineComponent,
  PBImageComponent,
  VectorComponent,
  VEllipseComponent,
  VEllipseSectorComponent,
  VertexComponent,
  PolygonComponent,
  TriangleComponent
} from 'plotboilerplate-react';
import { PlotBoilerplateProvider } from 'plotboilerplate-react';

const App = () => {
  return (
    <PlotBoilerplateProvider>
      <ErrorBoundary>
        <PlotBoilerplateComponent fullSize={true} enableTouch={true} />
        <LineComponent ax={-100} ay={-100} bx={100} by={100} />
        <VertexComponent x={-20} y={110} />
        <VertexComponent x={20} y={110} />
        <VectorComponent ax={-100} ay={100} bx={100} by={-100} />
        <CircleComponent centerx={0} centery={0} radius={50} />
        <CircleSectorComponent
          centerx={0}
          centery={0}
          radius={75}
          startAngle={-Math.PI / 4}
          endAngle={Math.PI / 4}
        />
        <CircleSectorComponent
          centerx={0}
          centery={0}
          radius={75}
          startAngle={Math.PI - Math.PI / 4}
          endAngle={Math.PI + Math.PI / 4}
        />
        <VEllipseComponent
          centerx={0}
          centery={0}
          axisx={40}
          axisy={30}
          rotation={Math.PI / 4}
        />
        <VEllipseComponent
          centerx={0}
          centery={0}
          axisx={-40}
          axisy={30}
          rotation={Math.PI / 4}
        />
        <VEllipseSectorComponent
          centerx={0}
          centery={0}
          axisx={-65}
          axisy={40}
          rotation={Math.PI / 4}
          startAngle={Math.PI + Math.PI / 2.4}
          endAngle={-Math.PI / 2.4}
        />
        <VEllipseSectorComponent
          centerx={0}
          centery={0}
          axisx={-65}
          axisy={40}
          rotation={Math.PI / 4}
          startAngle={Math.PI / 2.4}
          endAngle={Math.PI - Math.PI / 2.4}
        />
        <PolygonComponent
          datax={[-120, 0, 120, 170, 120, 0, -120, -170]}
          datay={[-120, -170, -120, 0, 120, 170, 120, 0]}
          isOpen={false}
        />
        <PBImageComponent
          src={'logo-512.png'}
          upperleftx={-20}
          upperlefty={-130}
          lowerrightx={20}
          lowerrighty={-90}
        />
        <TriangleComponent ax={130} ay={0} bx={100} by={-20} cx={100} cy={20} />
        <TriangleComponent
          ax={-130}
          ay={0}
          bx={-100}
          by={-20}
          cx={-100}
          cy={20}
        />
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
