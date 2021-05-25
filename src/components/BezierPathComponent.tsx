/**
 * @author  Ikaros Kappler
 * @date    2021-05-21
 * @version 0.0.1
 */

 import * as React from 'react';

 import { BezierPath, CubicBezierCurve, Vertex, XYCoords } from 'plotboilerplate';
 import { usePlotBoilerplateProvider } from '../providers/PlotBoilerplateProvider/Provider';

//  type VertArray4 = [Vertex,Vertex,Vertex,Vertex];
type VertArray4 = [XYCoords,XYCoords,XYCoords,XYCoords];
 
 interface BezierPathComponentProps {
    // data: Array<CubicBezierCurve> | Array<VertArray4>;
    data: Array<CubicBezierCurve> | Array<VertArray4> | Array<number>;
    adjustCircular?: boolean;
 }
 
 export const BezierPathComponent: React.FC<BezierPathComponentProps> = ({ data, adjustCircular }) => {
   const {
     isInitialized,
     addDrawable,
     plotBoilerplate,
     removeDrawable
   } = usePlotBoilerplateProvider();
   const [drawable, setDrawable] = React.useState<BezierPath | null>(null)
 
   React.useEffect(() => {
     if (isInitialized) {
      //  const path : BezierPath = BezierPath.fromArray(data);
       const path : BezierPath = makePath(data, adjustCircular);
      //  path.adjustCircular = adjustCircular;
       addDrawable(path);
       setDrawable(path);
     }
   }, [isInitialized])
 
   React.useEffect(() => {
     if (!isInitialized || !drawable || !plotBoilerplate) {
       return
     }
     // TODO: replace the whole thing!!!
    //  drawable.data = data;
    //  drawable.adjustCircular = adjustCircular;

    plotBoilerplate.remove(drawable);
    removeDrawable(drawable);
    // const path : BezierPath = BezierPath.fromArray(data);
    const path : BezierPath = makePath(data, adjustCircular);
    // path.adjustCircular = adjustCircular;
    addDrawable(path);
    setDrawable(path);
    plotBoilerplate.redraw();
   }, [data, adjustCircular])
 
   return <span>BezierPath</span>
 }

 const makePath = (data:Array<CubicBezierCurve> | Array<VertArray4> | Array<number>, adjustCircular?: boolean) => {
   if( data.length === 0 ) {
     throw "Cannot create BezierPathComponent from empty data array.";
   }
   if( typeof data[0] === "number" )  {
    return BezierPath.fromReducedList(data as Array<number>, adjustCircular);
   } else {
    const path : BezierPath = BezierPath.fromArray(data); // , adjustCircular); 
    path.adjustCircular = adjustCircular;
    return path;
   }
 }
 