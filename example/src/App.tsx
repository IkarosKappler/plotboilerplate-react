import { CircleComponent, CircleSectorComponent, ErrorBoundary, PlotBoilerplateComponent, LineComponent, PBImageComponent, VectorComponent, VEllipseComponent, VEllipseSectorComponent, VertexComponent, PolygonComponent, TriangleComponent, BezierPathComponent } from 'plotboilerplate-react'
import { gup } from "plotboilerplate/src/cjs/utils/gup";
import { PlotBoilerplateProvider } from 'plotboilerplate-react';

const App = () => {

  const uriParams = gup();
  console.log( uriParams );

  return (
    <PlotBoilerplateProvider>
      <ErrorBoundary>
        <PlotBoilerplateComponent fullSize={true} enableTouch={true} {...uriParams} />
        <LineComponent ax={-100} ay={-100} bx={100} by={100} />
        <VertexComponent x={-20} y={110} />
        <VertexComponent x={20} y={110} />
        <VectorComponent ax={-100} ay={100} bx={100} by={-100} />
        <CircleComponent centerx={0} centery={0} radius={50} />
        <CircleSectorComponent centerx={0} centery={0} radius={75} startAngle={-Math.PI/4} endAngle={Math.PI/4} />
        <CircleSectorComponent centerx={0} centery={0} radius={75} startAngle={Math.PI-Math.PI/4} endAngle={Math.PI+Math.PI/4} />
        <VEllipseComponent centerx={0} centery={0} axisx={40} axisy={30} rotation={Math.PI/4} />
        <VEllipseComponent centerx={0} centery={0} axisx={-40} axisy={30} rotation={Math.PI/4} />
        <VEllipseSectorComponent centerx={0} centery={0} axisx={-65} axisy={40} rotation={Math.PI/4} startAngle={Math.PI+Math.PI/2.4} endAngle={-Math.PI/2.4} />
        <VEllipseSectorComponent centerx={0} centery={0} axisx={-65} axisy={40} rotation={Math.PI/4} startAngle={Math.PI/2.4} endAngle={Math.PI-Math.PI/2.4} />
        <PolygonComponent datax={[-120, 0, 120, 170, 120, 0, -120, -170]} datay={[-120, -170, -120, 0, 120, 170, 120, 0]} isOpen={false} />
        <PBImageComponent src={"logo-512.png"} upperleftx={-20} upperlefty={-130} lowerrightx={20} lowerrighty={-90} />
        <TriangleComponent ax={130} ay={0} bx={100} by={-20} cx={100} cy={20} />
        <TriangleComponent ax={-130} ay={0} bx={-100} by={-20} cx={-100} cy={20} />
        <BezierPathComponent data={[
          0, -230, 50, -230,
          230, -50, 230, 0, 230, 50,
          50, 230, 0, 230, -50, 230,
          -230, 50, -230, 0, -230, -50,
          -50, -230
          // 0, -200
          ]} 
          adjustCircular={true} />
      </ErrorBoundary>
    </PlotBoilerplateProvider>
  )
}

export default App;
