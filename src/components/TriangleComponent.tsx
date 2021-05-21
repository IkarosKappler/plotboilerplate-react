/**
 * @author  Ikaros Kappler
 * @date    2021-05-21
 * @version 0.0.1
 */

 import * as React from 'react'

 import { Triangle, Vertex } from 'plotboilerplate'
 import { usePlotBoilerplateProvider } from '../providers/PlotBoilerplateProvider/Provider'
 
 interface TriangleComponentProps {
   ax: number;
   ay: number;
   bx: number;
   by: number;
   cx: number;
   cy: number;
 }
 
 export const TriangleComponent: React.FC<TriangleComponentProps> = ({ ax, ay, bx, by, cx, cy }) => {
   const {
     isInitialized,
     addDrawable,
     plotBoilerplate
   } = usePlotBoilerplateProvider();
   const [drawable, setDrawable] = React.useState<Triangle | null>(null)
 
   React.useEffect(() => {
     if (isInitialized) {
       const triangle : Triangle = new Triangle( new Vertex(ax,ay), new Vertex(bx,by), new Vertex(cx,cy) );
       addDrawable(triangle)
       setDrawable(triangle)
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
     drawable.c.x = cx;
     drawable.c.y = cy;
     plotBoilerplate?.redraw()
   }, [ax, by, bx, by, cx, cy])
 
   return <span>Triangle</span>
 }
 