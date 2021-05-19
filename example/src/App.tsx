import { CircleComponent, ErrorBoundary, PlotBoilerplateComponent, LineComponent, VectorComponent, VertexComponent } from 'plotboilerplate-react'
import { PlotBoilerplateProvider } from 'plotboilerplate-react'

// import ErrorBoundary from './ErrorBoundary'
import { Vertex } from 'plotboilerplate'

// TODO:
// Implement all Drawable classes: Vertex, Vector, Circle, CirlcleSector, VEllipse, VEllipseSector, Trianngle, Polygon, PBImage ...

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
  )
}

export default App;
