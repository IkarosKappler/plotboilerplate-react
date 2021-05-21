/**
 * @author  Ikaros Kappler
 * @date    2021-05-21
 * @version 0.0.1
 */

 import * as React from 'react';

 import { BezierPath, CubicBezierCurve, Vertex } from 'plotboilerplate';
 import { usePlotBoilerplateProvider } from '../providers/PlotBoilerplateProvider/Provider';

 type VertArray4 = [Vertex,Vertex,Vertex,Vertex];
 
 interface BezierPathComponentProps {
    data: Array<CubicBezierCurve> | Array<VertArray4>;
    adjustCircular?: boolean;
 }
 
 export const BezierPathComponent: React.FC<BezierPathComponentProps> = ({ data, adjustCircular }) => {
   const {
     isInitialized,
     addDrawable,
     plotBoilerplate
   } = usePlotBoilerplateProvider();
   const [drawable, setDrawable] = React.useState<BezierPath | null>(null)
 
   React.useEffect(() => {
     if (isInitialized) {
       const path : BezierPath = BezierPath.fromArray(data);
       path.adjustCircular = adjustCircular;
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
    const path : BezierPath = BezierPath.fromArray(data);
    path.adjustCircular = adjustCircular;
    addDrawable(path);
    setDrawable(path);
    plotBoilerplate.redraw();
   }, [data, adjustCircular])
 
   return <span>BezierPath</span>
 }
 