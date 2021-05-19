/**
 * @author  Ikaros Kappler
 * @date    2021-05-09
 * @version 0.0.1
 */

 import * as React from 'react'

 import { Vertex } from 'plotboilerplate'
 import { usePlotBoilerplateProvider } from '../providers/PlotBoilerplateProvider/Provider'
 
 interface VertexComponentProps {
   x: number;
   y: number;
 }
 
 export const VertexComponent: React.FC<VertexComponentProps> = ({ x, y }) => {
   const {
     isInitialized,
     addVertex,
     plotBoilerplate
   } = usePlotBoilerplateProvider();
   const [drawable, setDrawable] = React.useState<Vertex | null>(null)
 
   React.useEffect(() => {
     if (isInitialized) {
       const vertex : Vertex = new Vertex(x, y);
       addVertex(vertex)
       setDrawable(vertex)
     }
   }, [isInitialized])
 
   React.useEffect(() => {
     if (!isInitialized || !drawable) {
       return
     }
     drawable.x = x;
     drawable.y = y;
     plotBoilerplate?.redraw()
   }, [x, y])
 
   return <span>Vertex</span>
 }
 