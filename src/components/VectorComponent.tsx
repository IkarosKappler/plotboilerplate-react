/**
 * @author  Ikaros Kappler
 * @date    2021-05-19
 * @version 0.0.1
 */

 import * as React from 'react'

 import { Vector, Vertex } from 'plotboilerplate'
 import { usePlotBoilerplateProvider } from '../providers/PlotBoilerplateProvider/Provider'
 
 interface VectorComponentProps {
   ax: number;
   ay: number;
   bx: number;
   by: number;
 }
 
 export const VectorComponent: React.FC<VectorComponentProps> = ({ ax, ay, bx, by }) => {
   const {
     isInitialized,
     addDrawable,
     plotBoilerplate
   } = usePlotBoilerplateProvider();
   const [drawable, setDrawable] = React.useState<Vector | null>(null)
 
   React.useEffect(() => {
     if (isInitialized) {
       const vector : Vector = new Vector( new Vertex(ax,ay), new Vertex(bx,by));
       addDrawable(vector)
       setDrawable(vector)
     }
   }, [isInitialized])
 
   React.useEffect(() => {
     if (!isInitialized || !drawable) {
       return
     }
     drawable.a.x = ax;
     drawable.a.y = ay;
     drawable.b.x = bx;
     drawable.b.y = by;
     plotBoilerplate?.redraw()
   }, [ax, ay, bx, by])
 
   return <span>Vector</span>
 }
 